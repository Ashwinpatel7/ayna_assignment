A full-stack real-time chat application built with React, Strapi, and WebSocket that enables instant messaging between users and server.

🚀 Features
Real-time messaging using WebSocket
User authentication (signup/login/logout)
Message echo functionality (server sends back received messages)
Local storage for chat history and sessions
Responsive design for all devices
Secure backend using Strapi CMS
🛠️ Tech Stack
Frontend
React + Vite
Tailwind CSS for styling
WebSocket client
React Context API for state management
React Router for navigation
Backend
Strapi (Headless CMS)
WebSocket Server
SQLite database
Authentication using @strapi/plugin-users-permissions
🏃‍♂️ Getting Started
Prerequisites
Node.js
npm or yarn
Git
Installation
Clone the repository
bash
Copy code
git clone https://github.com/ashwinpatel7/ayna_assignment.git
cd ayna_assignment
Setup Backend
bash
Copy code
cd Backend
npm install
# or
yarn install

# Start development server
npm run develop
# or
yarn develop
Setup Frontend
bash
Copy code
cd Frontend
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
🌐 Environment Variables
Backend
Create a .env file in the Backend directory:

Copy code
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
📱 Usage
Register a new account or login with existing credentials
Navigate to the chat interface
Start sending messages
Server will echo back your messages
Logout when finished
🎯 API Endpoints
Authentication
POST /api/auth/local/register - User registration
POST /api/auth/local - User login
WebSocket
WebSocket server runs on ws://localhost:8080
💡 Additional Features
Real-time message updates
Persistent user sessions
Error handling and validation
Mobile-responsive UI
Secure authentication
🔒 Security Features
JWT authentication
Protected routes
Secure password handling
CORS configuration
Input validation
🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details

👥 Authors
Ashwin Patel - GitHub
🙏 Acknowledgments
Strapi Documentation
React Documentation
WebSocket Documentation
Tailwind CSS Documentation
For more information about Strapi, please refer to the official documentation.

For more information about React and Vite, check out the React documentation and Vite documentation.
