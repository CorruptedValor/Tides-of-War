const mongoose = require('mongoose');

const Player = require('../models/Player.js')
const requireLogin =require('../middlewares/requireAdmin');
const requireAdmin =require('../middlewares/requireLogin');

module.exports = (app) => {
    
    app.post('/api/player/add', requireLogin, requireAdmin, async (req, res) => {
        const { playerKey, displayName } = req.body;

        const player = new Player({
            playerKey,
            displayName
        });

        try {
            await player.save();

        } catch (err) {
            res.status(422).send(err);
        }
    });
    
}