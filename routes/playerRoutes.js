const mongoose = require('mongoose');
const Player = mongoose.model('players');

module.exports = (app) => {
    
    app.get('/api/player/all', async (req, res) => {
        const players =  await Player.find({});
        
        res.send(players);
    });
    
}