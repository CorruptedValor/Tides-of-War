const mongoose = require('mongoose');
const { Schema } = mongoose;
const MatchSchema = require('./Match');

const playerSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    displayName: String,
    playerKey: String,
    matches: [MatchSchema]
});

mongoose.model('players',playerSchema);