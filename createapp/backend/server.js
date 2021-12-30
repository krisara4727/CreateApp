import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import appRouter from './routes/appRoutes.js';

const app = express();
// app.use(express.json());
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
// app.use(express.urlencoded({
//     extended:true,
// }));
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 
 app.use(cors())

const connectionUrl = 'mongodb://localhost/appsmith' ;
mongoose.connect(connectionUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use('/api/user',userRoutes);

app.use('/api/app',appRouter)

const port = process.env.PORT || 9000;

app.listen(port,() => {
    console.log('connected to port ',port);
})