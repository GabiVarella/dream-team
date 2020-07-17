const axios = require('axios');
const Player = require('../models/player')

module.exports = {
    americasTeamInfo,
    euTeamInfo,
    americasPlayerInfo,
    euPlayerInfo,
    addToRoster,
}

function addToRoster(req, res){
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/players/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {
        console.log(response.data);
        response.data.user = req.user._id;
        Player.create(response.data)
        .then(player => {res.json(player)})
    })
}



function americasTeamInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/teams/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function euTeamInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/eu/en/teams/${req.params.id}/profile.json?api_key=${process.env.EU_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function americasPlayerInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/players/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function euPlayerInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/eu/en/players/${req.params.id}/profile.json?api_key=${process.env.EU_API_KEY}`)
    .then(response => {res.json(response.data)})
}