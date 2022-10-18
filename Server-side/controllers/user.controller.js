const userModel = require('../models/user.model');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

const registerUser = (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    userModel.findOne({email:email}, (err, result)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false})
        }else{
            if(result){
                res.send({message: 'Email already exists.'})
            }else{
                let form = new userModel(userDetails);
                form.save((err)=>{
                    if(err){
                        res.status(500).send({message: 'Sign up failed, please try again later.',status:false})
                    }else{
                        res.send({message: 'Sign up successful. Kindly sign in to validate your account.', status:true})
                    }
                })
            }
        }
    })
}

const signin = (req, res)=>{
    const userDetails = req.body;
    const password = userDetails.password;
    const email = userDetails.email;
    userModel.findOne({email: userDetails.email}, (err, user)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error'})
        }else{
            if(!user){
                res.send({message: 'Email does not exist, kindly create an account.'})
            }else{
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.status(500).send({message: 'Internal Server Error'})
                    }else{
                        if(!same){
                            res.send({message: 'Your password is incorrect', status:false})
                        }else{
                            const token = jwt.sign({email}, SECRET, {expiresIn: '1h'})
                            res.send({message: 'Sign in successful', status:true, token})
                        }
                    }
                })
            }
        }
    })
}

const getDashboard = (req, res)=>{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET, (err, result)=>{
        if(err){
            res.send({message: 'jwt failed', err, status:false})
        }else{
            const email = result.email
            userModel.findOne({email:email}, (err, result)=>{
                res.send({message: 'congrats', status:true, result})
            }) 
        } 
    })
}
module.exports = {registerUser, signin, getDashboard}