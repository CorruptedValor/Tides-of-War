const mongoose = require('mongoose');
const { Schema } = mongoose;

const roundListSchema = new Schema({
    roundList: [ String ]
})