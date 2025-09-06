# 🎬 ShowHive - Modern Movie Booking Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</div>

<div align="center">
  <h3>From Screen to Seat in Seconds</h3>
  <p>A modern, responsive movie booking platform built with React, Node.js, and MongoDB</p>
</div>

---

## 🌟 Features

### 🎯 **Core Functionality**
- **Movie Discovery** - Browse through an extensive collection of movies
- **Real-time Search** - Find movies instantly with live search suggestions
- **Seat Selection** - Interactive seat layout with real-time availability
- **Secure Booking** - Complete booking process with payment integration
- **User Authentication** - Secure login/signup with Clerk authentication
- **Admin Dashboard** - Comprehensive admin panel for movie management

### 🎨 **User Experience**
- **Responsive Design** - Seamless experience across all devices
- **Modern UI/UX** - Beautiful purple-themed interface with glassmorphism effects
- **Dark Mode** - Eye-friendly dark theme throughout the application
- **Smooth Animations** - Engaging transitions and hover effects
- **Mobile-First** - Optimized for mobile devices

### 🔍 **Search & Discovery**
- **Live Search** - Real-time movie search with dropdown suggestions
- **Advanced Filtering** - Search by title, genre, description, or release date
- **Search Results Page** - Dedicated page for comprehensive search results
- **Quick Navigation** - Direct links to movie details from search results

### 🎫 **Booking System**
- **Interactive Seat Map** - Visual seat selection with availability status
- **Multiple Showtimes** - Choose from various time slots
- **Date Selection** - Book tickets for different dates
- **Booking History** - View past and upcoming bookings
- **Payment Integration** - Secure payment processing

### 👤 **User Management**
- **Profile Management** - User profiles with booking history
- **Favorites System** - Save favorite movies for quick access
- **Booking Management** - View, modify, and cancel bookings
- **Authentication** - Secure user registration and login

### 🛠️ **Admin Features**
- **Movie Management** - Add, edit, and delete movies
- **Show Management** - Manage showtimes and availability
- **Booking Management** - View and manage all bookings
- **Dashboard Analytics** - Overview of platform statistics
- **User Management** - Monitor user activities

---

## 🚀 Technology Stack

### **Frontend**
- **React 19.1.0** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Elegant notifications
- **Clerk** - Authentication and user management

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending capabilities
- **Inngest** - Background job processing

### **Development Tools**
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📱 Screenshots

<div align="center">
  <h3>Home Page</h3>
  <img src="Screenshots/Home.png" alt="Home Page" width="800" />
  
  <h3>Movie Details</h3>
  <img src="Screenshots/Moviedetails.png" alt="Movie Details" width="800" />
  
  <h3>Seat Selection</h3>
  <img src="Screenshots/Seatlayout.png" alt="Seat Layout" width="800" />
  
  <h3>Admin Dashboard</h3>
  <img src="Screenshots/Dashboard.png" alt="Admin Dashboard" width="800" />
</div>

---

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/ShowHive.git
cd ShowHive
```

### **2. Install Dependencies**

**Client (Frontend)**
```bash
cd client
npm install
```

**Server (Backend)**
```bash
cd server
npm install
```

### **3. Environment Configuration**

**Client Environment Variables**
Create `client/.env`:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

**Server Environment Variables**
Create `server/.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
INNGEST_EVENT_KEY=your_inngest_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### **4. Database Setup**
1. Create a MongoDB database
2. Update the `MONGODB_URI` in your server `.env` file
3. The application will automatically create necessary collections

### **5. Run the Application**

**Start the Backend Server**
```bash
cd server
npm start
```

**Start the Frontend Development Server**
```bash
cd client
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📁 Project Structure

```
ShowHive/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── lib/            # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
├── server/                 # Node.js Backend
│   ├── config/             # Database and email configuration
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── Control/            # Controllers
│   └── package.json
├── Screenshots/            # Application screenshots
└── README.md
```

---

## 🎯 Key Features in Detail

### **🔍 Advanced Search System**
- **Real-time Search**: Type to see instant movie suggestions
- **Multi-field Search**: Search across titles, descriptions, and genres
- **Search Results Page**: Comprehensive results with filtering options
- **Mobile Search**: Optimized search experience on mobile devices

### **🎫 Smart Booking System**
- **Interactive Seat Map**: Visual representation of theater layout
- **Real-time Availability**: Live seat availability updates
- **Multiple Showtimes**: Choose from various time slots
- **Date Flexibility**: Book tickets for different dates
- **Booking Confirmation**: Email confirmations and booking history

### **👨‍💼 Admin Dashboard**
- **Movie Management**: Add, edit, and manage movie information
- **Show Management**: Create and manage showtimes
- **Booking Overview**: Monitor all bookings and user activities
- **Analytics**: Platform usage statistics and insights

### **🎨 Modern UI/UX**
- **Purple Theme**: Consistent purple color scheme throughout
- **Glassmorphism**: Modern glass-like effects and transparency
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Smooth Animations**: Engaging transitions and micro-interactions
- **Dark Mode**: Eye-friendly dark theme

---

## 🔧 API Endpoints

### **Authentication**
- `POST /api/user/signup` - User registration
- `POST /api/user/signin` - User login
- `GET /api/user/profile` - Get user profile

### **Movies**
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie details
- `POST /api/movies` - Add new movie (Admin)
- `PUT /api/movies/:id` - Update movie (Admin)
- `DELETE /api/movies/:id` - Delete movie (Admin)

### **Shows**
- `GET /api/shows` - Get all shows
- `GET /api/shows/:id` - Get show details
- `POST /api/shows` - Add new show (Admin)
- `PUT /api/shows/:id` - Update show (Admin)

### **Bookings**
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking

---

## 🚀 Deployment

### **Frontend Deployment (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Backend Deployment (Railway/Heroku)**
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with automatic builds

### **Database (MongoDB Atlas)**
1. Create a MongoDB Atlas cluster
2. Get connection string
3. Update `MONGODB_URI` in environment variables

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aditya**
- GitHub: [@youruseame](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **Clerk** for authentication services
- **Tailwind CSS** for the amazing utility-first CSS framework
- **Lucide** for beautiful icons
- **React** team for the incredible framework
- **MongoDB** for the flexible database solution

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p>Made with ❤️ by Aditya</p>
</div>