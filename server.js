    // server.js
    import express, { json } from 'express';
    import { config } from 'dotenv';
    import connectDB from './config/db.js';
    import authRoutes from './routes/authRoutes.js'; // ✅ Use import instead of require
    import taskRoutes from './routes/taskRoutes.js'; // ✅ Use import instead of require

    // Load environment variables from .env file
    config();

    // Connect to MongoDB
    connectDB();

    const app = express();

    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
    module.exports = app;


    // Middleware to parse JSON bodies
    app.use(json());

    app.use((req, res, next) => {
        console.log(`Incoming ${req.method} ${req.url}`);
        next();
      });

    // Routes
    app.use('/api', authRoutes);
    app.use('/api/tasks', taskRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
