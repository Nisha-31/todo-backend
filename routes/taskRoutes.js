// routes/taskRoutes.js
import { Router } from 'express';
import { body } from 'express-validator';
const router = Router();
import authMiddleware from '../middleware/authMiddleware.js';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';


router.use(authMiddleware);

// Get tasks: GET /api/tasks
router.get('/', getTasks);

// Create task: POST /api/tasks
router.post(
    '/',
    [body('title').notEmpty().withMessage('Task title is required')],
    createTask
  );

// Update task: PUT /api/tasks/:id
router.put( '/:id',
    [
      body('title').optional().notEmpty().withMessage('Title cannot be empty'),
      body('completed').optional().isBoolean().withMessage('Completed must be true or false'),
    ],
    updateTask
  );

// Delete task: DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

export default router;
