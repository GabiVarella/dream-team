const axios = require('axios');
const Player = require('../models/player')
const DreamTeam = require('../models/dreamTeam')

module.exports = {
    americasTeamInfo,
    euTeamInfo,
    americasPlayerInfo,
    euPlayerInfo,
    addToRoster,
    getRoster,
    removeFromRoster,
    getDreamTeam,
    saveDreamTeam
    
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

function addToRoster(req, res){
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/players/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {
        console.log(response.data);
        response.data.user = req.user._id;
        Player.create(response.data)
        .then(player => {res.json(player)})
    })
}

function getRoster(req, res){
    Player.find({"user":req.user._id})
    .then(players => {res.json(players)})
}

function removeFromRoster(req, res){
    Player.findByIdAndDelete(req.params.id)
    .then(player => {res.json(player)})
}


function getDreamTeam(req, res){
    DreamTeam.find({"user":req.user._id})
    .then(dreamTeam => {res.json(dreamTeam)})
}

function saveDreamTeam(req, res){
    req.body.user = req.user._id;
    DreamTeam.findOneAndUpdate({"user":req.user._id}, req.body, {upsert: true, new: true})
    .then((dreamTeam) => {if (dreamTeam) {res.json(dreamTeam)} else {res.json()}})
}