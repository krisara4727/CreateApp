import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import {generateToken} from '../utils.js'

const userRouter = express.Router();

userRouter.post('/login',expressAsyncHandler(async (req,res) => {
    const createdUser = await User.findOne({email: req.body.email});
    console.log('inside login ',createdUser);
    if(createdUser){
        console.log('user created ',createdUser);
        if(bcrypt.compareSync(req.body.password, createdUser.password)){
            res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                token: generateToken(createdUser)
            });
            return;
        }
    }
    res.status(401).json({message: "Invalid user email or password "});
}));

userRouter.get('/',expressAsyncHandler( async(req,res) => {
    res.send('this is chivte krishna>>>>>')
}))

userRouter.post('/register', expressAsyncHandler( async(req,res) => {
    // const user = await User.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: bcrypt.hashSync(req.body.password,8)
    // },(err,resp) => {
    //     if(err){
    //         console.log('err registering ',err);
    //         return res.status(409).send({message:'Error in creating user ',err})
    //     }else{
    //         res.send({
    //             _id: user._id,
    //             name: user.name,
    //             email: user.email,
    //             token: generateToken(user)
    //         })
    //         console.log('data ',resp)
    //     }
    // })
    const user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser)
    })
}))


export default userRouter