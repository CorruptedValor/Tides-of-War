const mongoose = require('mongoose');

const requireLogin =require('../middlewares/requireAdmin');
const requireAdmin =require('../middlewares/requireLogin');

const Player = mongoose.model('players');

module.exports = (app) => {
    
    app.post('/api/player/add', requireLogin, requireAdmin, async (req, res) => {
        console.log(req.body);

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