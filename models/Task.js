// models/Task.js
import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title:     { type: String, required: true },
  completed: { type: Boolean, default: false },
  user:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Task', taskSchema);
