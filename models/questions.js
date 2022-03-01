const mongoose = require('mongoose');

const questionsScehma = new mongoose.Schema({
    question: String,
    answerOptions: [
        {
            optionNumber:Number,
            text: String,
            isCorrect : Boolean
        },
        {
            optionNumber:Number,
            text: String,
            isCorrect : Boolean
        },
        {
            optionNumber:Number,
            text: String,
            isCorrect : Boolean
        },
        {
            optionNumber:Number,
            text: String,
            isCorrect : Boolean
        }
    ]
})

module.exports = mongoose.model('questions',questionsScehma)