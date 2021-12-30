import express from 'express';
import mongoose from 'mongoose';
import expressAsyncHandler from 'express-async-handler';
import App from '../models/appModel.js';
import { isAuth } from '../utils.js';


const appRouter = express.Router();

appRouter.get('/', isAuth, expressAsyncHandler(async(req, res) => {
    console.log('8********************************************************************************')
    const apps = await App.find({ user: req.user.$__._id });
    console.log('user are printed here ',apps);
    res.send(apps);
    
}))

appRouter.post('/', isAuth, expressAsyncHandler(async(req,res) => {
    console.log('post here *******************',req.body,req.user.$__._id);
    const app = new App({
        button: req.body.button,
        audio: req.body.audio,
        container: req.body.container,
        checkbox: req.body.checkbox,
        chart: req.body.chart,
        input: req.body.input,
        text: req.body.text,
        divider: req.body.divider,
        video: req.body.video,
        image: req.body.image,
        date: req.body.date,
        selectfile: req.body.selectfile,
        name: req.body.name,
        user: req.user.$__._id,
    });
    const createdapp = await app.save();
    res.status(201).send({message:'New app Created ', app:createdapp});
}));

appRouter.get('/:id', isAuth, expressAsyncHandler( async(req, res) => {
     const appData =  await App.findById(req.params.id);
     if(appData){
         res.send(appData);
     }else{
         res.status(404).json({message: 'App Not Found'});
     }
}))


appRouter.put('/update/:id', isAuth, expressAsyncHandler(async(req,res) => {
    console.log('post here *******************',req.body,req.user.$__._id);
    const findapp = await App.findById(req.params.id);
    if (findapp){
        findapp.button= req.body.button;
        findapp.audio= req.body.audio;
        findapp.container= req.body.container;
        findapp.checkbox= req.body.checkbox;
        findapp.chart = req.body.chart; 
        findapp.input=req.body.input;
        findapp.text= req.body.text;
        findapp.divider= req.body.divider;
        findapp.video= req.body.video;
        findapp.image= req.body.image;
        findapp.date= req.body.date;
        findapp.selectfile= req.body.selectfile;
        findapp.name= req.body.name;
        findapp.user= req.user.$__._id;
        const updatedApp = await findapp.save();
        res.send(updatedApp)
    }else{
        res.status(404).json({'message':'App Not Found.'})
    }
}));

appRouter.delete('/delete/:id', isAuth , expressAsyncHandler(async(req,res) => {
    const app = await App.findById(req.params.id);
    if(app){
        const deleteApp = await app.remove();
        res.send(deleteApp);
    }else{
        res.status(404).json({ "message": 'App Not Found' });
    }
}))





export default appRouter;