const mongoose = require('mongoose');

// const requireLogin =require('../middlewares/requireAdmin');
// const requireAdmin =require('../middlewares/requireLogin');

const Player = mongoose.model('players');

module.exports = (app) => {
    
    app.get('/api/player/all', async (req, res) => {
        const players =  await Player.find({});
        
        res.send(players);
    //     const player =  await Player.find({}, function(err, players){
    //         var playerMap = {};

    //         players.forEach(function(player) {
    //             playerMap[player.id] = player;
    //         });
    //         console.log(playerMap);            
    //         res.send(playerMap);
    //     })

    // });
    });
    
}