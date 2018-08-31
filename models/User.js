const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  _player: { type: Schema.Types.ObjectId, ref: 'Player' },
  isAdmin: { type: Boolean, default: false }
})

mongoose.model('users', userSchema)
