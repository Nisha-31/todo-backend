import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: {  // ✅ Make sure this is present!
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

export default User;  // ✅ Export the model
