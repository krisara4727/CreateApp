import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
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
    src: String,
    autoplay: Boolean,
    id: Number,
},{
    timestamps: true
});

const Video = mongoose.model('Video',videoSchema);
export default Video;