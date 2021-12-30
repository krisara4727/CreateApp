import mongoose from 'mongoose';

const audioSchema = new mongoose.Schema({
    id: Number,
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
    loop: {
        type: Boolean
    },
    src: {
        type: String,
    },
    muted: {
        type: Boolean,
    },
    autoplay: {
        type: Boolean,
    }
    
},{
    timestamps: true
});

const Audio = mongoose.model('Audio',audioSchema);
export default Audio;