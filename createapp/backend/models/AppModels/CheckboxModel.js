import mongoose from 'mongoose';

const checkboxSchema = new mongoose.Schema({
    element: {
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
    checked:{
        type: Boolean
    },
    label:{
        type: String,
    },
    alignment: {
        type: Number,
    },
    id: Number,
    
},{
    timestamps: true
});

const Checkbox = mongoose.model('Checkbox',checkboxSchema);
export default Checkbox;