import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(password) {
        // Password regex pattern: at least 8 characters, one letter, one digit, one special character
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
      },
      message: props => `${props.value} is not a valid password. It must be at least 8 characters long and contain at least one letter, one digit, and one special character.`,
    },
  },
});

export default mongoose.model('User', UserSchema);
