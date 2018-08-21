const mongoose = require('mongoose');
const { Schema } = mongoose;

const roundListSchema = new Schema({
    round: Number,
    season: Number
})