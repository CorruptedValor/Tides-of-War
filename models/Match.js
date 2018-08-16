const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchSchema = new Schema({
    roundId: String,
    _opponent: { type: Schema.Types.ObjectId, ref: 'Player' },
    personalScore: Number,
    opponentScore: Number,
    listId: String
})