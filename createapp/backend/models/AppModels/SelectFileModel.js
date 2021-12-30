import mongoose from 'mongoose';

const selectFileSchema = new mongoose.Schema({
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
    maxfilesize : Number,
    allowedTypes: String,
    required: Boolean,
    disabled: Boolean,
    id: Number,

},{
    timestamps: true
});

const SelectFile = mongoose.model('SelectFile',selectFileSchema);
export default SelectFile;