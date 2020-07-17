const Player = require('../models/player');
function getDreamTeam(req, res) {
    Player.find({ "user": req.user._id })
        .then(players => { res.json(players); });
}
