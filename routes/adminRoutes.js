const mongoose = require('mongoose');
const requireLogin =require('../middlewares/requireAdmin');
const requireAdmin =require('../middlewares/requireLogin');

const Player = mongoose.model('players');

module.exports = (app) => {

    app.post('/api/mission/admin', requireLogin, requireAdmin, async (req, res) => {

        var plOne, plTwo;
        const { season, round, mission, playerOne, playerOneScore, playerTwo, playerTwoScore } = req.body;

        const playerOneObj = await Player.findOne({playerKey: playerOne.playerKey});
        const playerTwoObj = await Player.findOne({playerKey: playerTwo.playerKey});
        
        plOne = playerOneObj;
        plTwo = playerTwoObj;

        plOne.matches.push({season, round, mission, opponentId: plTwo._id, personalScore: playerOneScore, opponentScore: playerTwoScore});
        plTwo.matches.push({season, round, mission, opponentId: plOne._id, personalScore: playerTwoScore, opponentScore: playerOneScore});

        await plOne.save();
        await plTwo.save();
        
        res.send('got it');

    })

    app.post('/api/player/add', requireLogin, requireAdmin, async (req, res) => {
 
        const { playerKey, displayName } = req.body;

        const player = new Player({
            playerKey,
            displayName
        });

        const existingKey = await Player.findOne({ playerKey })
        if (existingKey) {
            res.send(existingKey);
        } else {
            try {
                await player.save();
                res.send();
            } catch (err) {
                res.status(422).send(err);
            }
        }
    });
    
}