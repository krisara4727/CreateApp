import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
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
    src: String,
    objectFit: String,
    id: Number,
},{
    timestamps: true
});

const Image = mongoose.model('Image',imageSchema);
export default Image;