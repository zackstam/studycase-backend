const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  { type: String, required: true }, // String is shorthand for {type: String}
  email: {type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  places: [{ type: mongoose.Types.ObjectId, ref: "Place" }],
  address: { type: mongoose.Types.ObjectId, ref: "Address" }, 
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);