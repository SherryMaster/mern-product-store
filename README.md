# Product Store

A full-stack web application for managing products, built with React, TypeScript, Node.js, and MongoDB.

## 🚀 Features

- Modern, responsive UI built with Chakra UI
- Dark/Light theme support
- Real-time product management (Create, Read, Update, Delete)
- RESTful API backend
- MongoDB database integration
- TypeScript support for enhanced type safety
- Vite-powered development environment

## 🛠 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Chakra UI
- React Router DOM
- Zustand (State Management)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## 📦 Project Structure

```
product-store/
├── frontend/                 # Frontend React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand store configurations
│   │   ├── types/          # TypeScript type definitions
│   │   └── main.tsx        # Application entry point
│   └── vite.config.ts      # Vite configuration
└── backend/                 # Backend Node.js application
    ├── config/             # Database and other configurations
    ├── controllers/        # Route controllers
    ├── routes/            # API route definitions
    └── server.js          # Server entry point
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18.18.0 or higher)
- MongoDB instance
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd product-store
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a separate terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔄 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `POST /api/products/dummy` - Create dummy products for testing

## 🎨 UI Components

The application uses Chakra UI components with custom theming support:
- Responsive navigation bar
- Product cards with consistent sizing
- Grid layout for product display
- Toast notifications for user feedback
- Dark/Light theme toggle

## 🔧 Development

### Frontend Development
- Uses Vite for fast development and building
- ESLint configuration for code quality
- TypeScript for type safety
- Path aliases for clean imports
- Proxy configuration for API requests

### Backend Development
- Express.js with modular routing
- MongoDB connection with Mongoose
- Environment variable support
- Error handling middleware

## 📝 Scripts

### Frontend
```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### Backend
```json
{
  "dev": "nodemon backend/server.js"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👤 Developer

### Shaheer Ahmed
Full Stack Developer | MERN Stack Specialist

<div align="left">
  <a href="https://www.linkedin.com/in/shaheer-ahmed-987068282/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://www.facebook.com/profile.php?id=100076044710923" target="_blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"/>
  </a>
</div>

Feel free to connect with me on LinkedIn or Facebook for any queries, suggestions, or collaboration opportunities!

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
