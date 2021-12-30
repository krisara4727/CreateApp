import mongoose from 'mongoose';

const dividerSchema = new mongoose.Schema({
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
    direction: Number,
    background: String,
    style: String,
    id: Number,
},{
    timestamps: true
});

const Divider = mongoose.model('Divider',dividerSchema);
export default Divider;