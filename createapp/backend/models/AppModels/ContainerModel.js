import mongoose from 'mongoose';

const containerSchema = new mongoose.Schema({
    element: {
        type: String
    },
    minHeight: {
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
    boxshadow: {
        type: String,
    },
    shadowColor: {
        type: String
    },
    id: Number,
    
},{
    timestamps: true
});

const Container = mongoose.model('Container',containerSchema);
export default Container;