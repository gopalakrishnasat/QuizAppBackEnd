
const users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// desc       get all users
exports.getUsers = async (req,res,next)=>{
    
    try{
        const allusers = await users.find();;
        res.status(200).json({success: true, data: allusers})
    } catch (err) {
        res.status(400).json({success: false})
    }
}

//desc        getuser
exports.getUser = async(req,res, next)=>{
    try{
        const user = await users.findById(req.params,id);
        res.status(200).json({success: true, data: user})
    } catch (err) {
        res.status(400).json({success: false})
    }
}

//desc        createuser
exports.createUser = async(req,res,next)=>{
    try{
        console.log(req.body);
        const user = await users.create(req.body)
    res.status(201).json({
        success: true,
        data: user
    })
    }catch (err){
        res.send(400).json({success:false})
    }
    
}
//desc         updateuser
exports.updateUser = async(req,res,next)=>{
   try{
    const updatedUser = await users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if(!this.updateUser){
        return res.status(400).json({success:false})
    }
    res.status(200).json({success:true,data: updatedUser})
   } catch (err) {
    res.status(400).json({success: false})
   }
}

//desc         deleteuser
exports.deleteUser = async (req,res,next)=>{
    try{
        const deletedUser = await users.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,data: deletedUser})
    } catch (err){
        res.status(400).json({success: false})
    }
}



exports.userLogin = async (req,res,next)=>{
    try {
        const {email,password} = req.body;
        if(!(email&&password)){
            res.status(400).send({success:false,masg:" Please provide email and password"})
        }
        const user = await users.findOne({email})
        if(user && password === user.password){
            const token = jwt.sign(
                {user_email:email,
                user_password:password},
                process.env.TOKEN_KEY,{
                    expiresIn: "10h"
                });
                user.token = token;
                res.status(200).json({success:true,data:user,token:token})
        } else {
            res.status(400).send("invalid credentials")
        }
        

    } catch (error) {
        res.status(400).json({success: false})
    }
}








