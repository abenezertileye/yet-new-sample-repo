const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
});

//login
UserSchema.statics.login = async function(email, password){
  const user = await User.findOne({email})
  if(user){
      const auth = user.password
      if(auth){
          return user
      }throw Error('incorrect password')
  }throw Error('incorrect email')
}

const User = mongoose.model('User', UserSchema)
// Export model
module.exports = User;