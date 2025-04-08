🚀 Live API
Base URL: https://todo-backend-2-nnk8.onrender.com


📁 Features
User registration and login with JWT authentication

✅ Create, read, update, delete (CRUD) tasks

✅ Secure routes using token-based authentication

✅ MongoDB database integration

🛠 Tech Stack
Node.js

Express.js

MongoDB (via Mongoose)

JWT for authentication

dotenv for environment management

🧪 Getting Started (Local Setup)

1️. Clone the repository
git clone https://github.com/your-username/todo-backend.git
cd todo-backend

2️.Install dependencies

npm install

3️.Create your .env file
Make a copy of .env.example and name it .env, then fill in:

PORT=5000
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_key

4️. Run the app
npm start

App will run at:
http://localhost:5000

API Endpoints

Method	Route	Description
POST	/api/register	Register user


POST	/api/login	Login user

Tasks (Requires Auth)
Method	Route	Description
GET	/api/tasks	Get all tasks

POST	/api/tasks	Create a task

PUT	/api/tasks/:id	Update a task

DELETE	/api/tasks/:id	Delete a task

Use the token returned from login in the Authorization header like:
Authorization: Bearer <token>

🔐 Authentication
Protected routes require a valid JWT token in the header:


Authorization: Bearer your_token_here

📦 Deployment
Deployed on Render.
Make sure your Render environment has these variables:

PORT

MONGO_URI

JWT_SECRET
