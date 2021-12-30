import mongoose from 'mongoose';

const ButtonSchema = new mongoose.Schema({
    element: {
        type: String
    },
    data: {
        type: String
    },
    x:{
        type: Number
    },
    y: {
        type: Number
    },
    freshness: {
        type: String
    },
    width: {
        type: String
    },
    height:{
        type: String
    },
    borderRadius:{
        type: String,
    },
    borderColor:{
        type: String,
    },
    borderWidth: {
        type: String,
    },
    background: {
        type: String,
    },
    boxShadow: {
        type: String,
    },
    shadowColor: {
        type: String
    },
    textAlign: {
        type: String,
    },
    disabled: {
        type: Boolean,
    },
    id: Number,
    
},{
    timestamps: true
});

const Button = mongoose.model('Button',ButtonSchema);
export default Button;