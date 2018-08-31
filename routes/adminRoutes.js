const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireAdmin')
const requireAdmin = require('../middlewares/requireLogin')

const Player = mongoose.model('players')

module.exports = (app) => {
  app.put('/api/reporting/admin', requireLogin, requireAdmin, async (req, res) => {
    // var plOne, plTwo;
    const { season, round, mission, playerOne, playerOneScore, playerTwo, playerTwoScore } = req.body

    // const playerOneObj = await Player.findOne({playerKey: playerOne.playerKey});
    // const playerTwoObj = await Player.findOne({playerKey: playerTwo.playerKey});

    Player.updateOne(
      {
        playerKey: playerOne.playerKey,
        matches: {
          $elemMatch: { season: season, round: round }
        }
      },
      {
        $set: {
          'matches.$.mission': mission,
          'matches.$.personalScore': playerOneScore,
          'matches.$.opponentKey': playerTwo.playerKey,
          'matches.$.opponentScore': playerTwoScore
        }
      }
    ).exec()
    Player.updateOne(
      {
        playerKey: playerTwo.playerKey,
        matches: {
          $elemMatch: { season: season, round: round }
        }

      },
      {
        $set: {
          'matches.$.mission': mission,
          'matches.$.personalScore': playerTwoScore,
          'matches.$.opponentKey': playerOne.playerKey,
          'matches.$.opponentScore': playerOneScore
        }
      }
    ).exec()

    res.send('got it')
  })

  app.post('/api/player/add', requireLogin, requireAdmin, async (req, res) => {
    var roundGenerator
    const { playerKey, displayName, season, round } = req.body

    const player = new Player({
      playerKey,
      displayName
    })

    const existingKey = await Player.findOne({ playerKey })
    if (existingKey) {
      res.send(existingKey)
    } else {
      roundGenerator = player
      for (let i = 1; i <= season; i++) {
        for (let x = 1; x <= round; x++) {
          roundGenerator.matches.push({ season: i, round: x, mission: null, opponentKey: null, personalScore: null, opponentScore: null })
        }
      }
      try {
        await roundGenerator.save()
        res.send()
      } catch (err) {
        res.status(422).send(err)
      }
    }
  })
}
