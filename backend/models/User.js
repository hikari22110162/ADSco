const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String },
  hometown: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
