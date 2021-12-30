import mongoose from 'mongoose';

const textSchema = new mongoose.Schema({
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
    borderColor:{
        type: String,
    },
    borderWidth: {
        type: String,
    },
    background: {
        type: String,
    },
    textAlign: {
        type: String,
    },
    textsize : String,
    textcolor : String,
    fontstyle : String,
    id: Number,
    
},{
    timestamps: true
});

const Text = mongoose.model('Text',textSchema);
export default Text;