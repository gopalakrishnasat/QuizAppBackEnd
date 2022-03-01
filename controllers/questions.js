const questions = require('../models/questions');

exports.createQuestion = async (req,res,next)=>{
    try{
        const question = await questions.create(req.body)
        res.status(201).json({success: true, data:question})
    } catch (err) {
        res.status(400).json({success: false})
    }
}


exports.getQuestions = async (req,res,next) => {
    try {
        const allQuestions = await questions.find()
        res.status(200).json({success:true, data: allQuestions})
    } catch (error) {
        
    }
}