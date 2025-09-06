import axios from 'axios'
import Movie from '../models/Movie.js';
import Show from '../models/Show.js';
import { inngest } from '../Inngest/index.js';

// Get 250 top movies from IMDB RapidAPI
export const getnowplayingMovies = async (req, res) => {
  try {
    console.log('Fetching movies from IMDB RapidAPI...');
    console.log('API Key exists:', !!process.env.X_RAPIAPI_KEY);
    
    if (!process.env.X_RAPIAPI_KEY) {
      return res.json({ success: false, message: "RapidAPI key not found in environment variables" });
    }
    
    // Get random movies by using different genres and sorting
    const genres = ['Action', 'Drama', 'Comedy', 'Thriller', 'Horror', 'Romance', 'Sci-Fi', 'Adventure'];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const sortFields = ['id', 'startYear', 'averageRating', 'numVotes'];
    const randomSortField = sortFields[Math.floor(Math.random() * sortFields.length)];
    
    
    const { data } = await axios.get(`https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=${randomGenre}&rows=25&sortOrder=DESC&sortField=${randomSortField}`, {
      headers: {
        'x-rapidapi-host': "imdb236.p.rapidapi.com",
        'x-rapidapi-key': `${process.env.X_RAPIAPI_KEY}`
      },
    })
    // Get the movies array from the response
    const rawMovies = data.results || data.data || data;
    
    // Transform each movie to match the expected format
    const movies = rawMovies.map((movie, index) => ({
      id: movie.id || movie.imdbID || `movie_${index}`,
      originalTitle: movie.title || movie.originalTitle || movie.Title || 'Unknown Title',
      description: movie.description || movie.overview || movie.Plot || 'No description available',
      primaryImage: movie.poster || movie.poster_path || movie.Poster || movie.primaryImage || null,
      thumbnails: movie.backdrop_path ? [`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`] : [],
      trailer: movie.trailer || null,
      releaseDate: movie.release_date || movie.Release || movie.releaseDate || 'Unknown',
      original_language: [movie.original_language || movie.Language || 'en'],
      genres: movie.genres || (movie.Genre ? movie.Genre.split(', ') : []) || [],
      casts: movie.cast || (movie.Actors ? movie.Actors.split(', ').map(actor => ({
        name: actor.trim(),
        fullName: actor.trim(),
        primaryImage: null
      })) : []) || [],
      averageRating: movie.vote_average || movie.imdbRating || movie.averageRating || 0,
      runtime: movie.runtime || movie.Runtime || null,
      numVotes: movie.vote_count || movie.imdbVotes || movie.numVotes || 0
    }));
    
    
    res.json({ success: true, movies: movies });
  } catch (error) {
    console.error('IMDB RapidAPI Error:', error.response?.data || error.message);
    console.error('Error status:', error.response?.status);
    res.json({ success: false, message: error.message });
  }
}

// Admin can add any movie from that 250 movies to database
export const addshow = async (req, res) => {
  try {
    const { movieId, showsInput, showprice } = req.body;
    let movie = await Movie.findById(movieId);

    if (!movie) {
      const moviedataResponse = await axios.get(`https://imdb236.p.rapidapi.com/api/imdb/${movieId}`, {
        headers: {
          'x-rapidapi-host': "imdb236.p.rapidapi.com",
          'x-rapidapi-key': `${process.env.X_RAPIAPI_KEY}`
        }
      })

      const moviedata = moviedataResponse.data;

      const movieDetails = {
        _id: moviedata.id || movieId,
        originalTitle: moviedata.originalTitle || moviedata.primaryTitle || 'Unknown Title',
        description: moviedata.description || 'No description available',
        primaryImage: moviedata.primaryImage || 'https://via.placeholder.com/300x450/000000/FFFFFF?text=No+Image',
        thumbnails: moviedata.thumbnails || [],
        trailer: moviedata.trailer || null,
        releaseDate: moviedata.releaseDate || moviedata.startYear || 'Unknown',
        original_language: moviedata.spokenLanguages || ['en'],
        genres: moviedata.genres || ['Unknown'],
        casts: moviedata.cast || [],
        averageRating: moviedata.averageRating || 0,
        runtime: moviedata.runtimeMinutes || null,
        numVotes: moviedata.numVotes || 0
      };

      movie = await Movie.create(movieDetails);
    }

    const showstoCreate = [];
    showsInput.forEach((show) => {
      const showdate = show.date;
      const time = show.time;
      const datetimeString = `${showdate}T${time}`;
      const showDateTime = new Date(datetimeString);
      
      // Ensure the date is in the future by adding 1 day if it's in the past
      const now = new Date();
      const finalDateTime = showDateTime < now ? new Date(showDateTime.getTime() + 24 * 60 * 60 * 1000) : showDateTime;
      
      showstoCreate.push({
        movie: movieId,
        showDateTime: finalDateTime,
        showprice,
        occupiedSeats: {},
      });
    });


    if (showstoCreate.length > 0) {
      await Show.insertMany(showstoCreate);
    }

    await inngest.send({
      name : 'app/show.added',
      data : {movieId : movie._id}
    })

    res.json({ success: true, message: "Show(s) added successfully." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all unique movies from database
export const getmovies = async (req, res) => {
  try {
    const shows = await Show.find({ showDateTime: { $gte: new Date() } }).populate('movie').sort({ showDateTime: 1 });
    const uniqueshows = new Set(shows.map((show) => show.movie));

    res.json({ success: true, shows: Array.from(uniqueshows) });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// Get Single movie from database
export const getmovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const shows = await Show.find({ movie: movieId, showDateTime: { $gte: new Date() } });
    const movie = await Movie.findById(movieId);
    const datetime = {};

    shows.forEach((show) => {
      const date = show.showDateTime.toISOString().split('T')[0];
      if (!datetime[date]) {
        datetime[date] = [];
      }
      datetime[date].push({ time: show.showDateTime, showId: show._id })
    })
    res.json({ success: true, movie, datetime })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

