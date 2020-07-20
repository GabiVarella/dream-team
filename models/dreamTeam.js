const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const DreamTeam = new Schema({
    goalkeeper: {type: String, default: "Please Select"},
    fieldPlayer1: {type: String, default: "Please Select"},
    fieldPlayer2: {type: String, default: "Please Select"},
    fieldPlayer3: {type: String, default: "Please Select"},
    fieldPlayer4: {type: String, default: "Please Select"},
    fieldPlayer5: {type: String, default: "Please Select"},
    fieldPlayer6: {type: String, default: "Please Select"},
    fieldPlayer7: {type: String, default: "Please Select"},
    fieldPlayer8: {type: String, default: "Please Select"},
    fieldPlayer9: {type: String, default: "Please Select"},
    fieldPlayer10: {type: String, default: "Please Select"},
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true })



module.exports = mongoose.model('DreamTeam', DreamTeam);