const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    // _id:{
    //     type:Number,
    //     required:true
    // },
    question: {
        type: String,
        required: true
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    }
},{collection:'question'});

module.exports = mongoose.model('question',questionSchema);