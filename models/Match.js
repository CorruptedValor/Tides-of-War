const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchSchema = new Schema({
    season: Number,
    round: Number,
    mission: Number,
    _opponentId: { type: Schema.Types.ObjectId, ref: 'Player' },
    personalScore: Number,
    opponentScore: Number,
    //_listId: { type: Schema.Types.ObjectId, ref: 'List' }
})

module.exports = matchSchema;