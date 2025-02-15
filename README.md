# Real-Time Chat Application

A full-stack real-time chat application built with React, Strapi, and WebSocket that enables instant messaging functionality.

## 🚀 Features

- Real-time messaging using WebSocket
- User authentication (signup/login/logout)
- Message persistence
- Responsive design
- Secure backend using Strapi CMS

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios for API calls
- React Router DOM
- React Context API for state management

### Backend
- Strapi v5.10.2
- WebSocket (ws)
- SQLite database
- @strapi/plugin-users-permissions

## 📋 Prerequisites

- Node.js (>=18.0.0 <=22.x.x)
- npm (>=6.0.0)

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/ashwinpatel7/ayna_assignment.git
cd ayna_assignment
```

### 2. Backend Setup
```bash
cd Backend
npm install

# Start Strapi development server
npm run develop
```

### 3. Frontend Setup
```bash
cd Frontend
npm install

# Start Vite development server
npm run dev
```

## 🔧 Configuration

### Backend Environment Variables
Create a `.env` file in the `Backend` directory:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
```

## 🚦 Available Scripts

### Backend
```bash
npm run develop # Start development server
npm run start   # Start production server
npm run build   # Build the admin panel
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/local/register` - Register new user
- `POST /api/auth/local` - Login user

### WebSocket
- WebSocket server runs on the default port

## 🔒 Security Features
- JWT Authentication
- Protected Routes
- CORS Configuration
- Input Validation

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License.

## 🛟 Support
For support, please open an issue in the repository.

## 🙏 Acknowledgments
- [Strapi Documentation](https://docs.strapi.io/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
