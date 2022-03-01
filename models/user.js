const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'please add a firstname'],
        unique:true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    lastName: {
        type: String,
        required: [true,'please add a lastname'],
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'Male',
            'Female',
            'Others'
        ]
    },
    email: {
        type: String,
        match: [ 
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please add a valid email address']
    },
    password: String,
    confirmPassword: String,
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('userSchema',userSchema)