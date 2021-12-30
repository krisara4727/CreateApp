import mongoose from 'mongoose';

const inputSchema = new mongoose.Schema({
    element: {
        type: String
    },
    label: {
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
    type: String,
    maxchars: {
        type: Number,
        min: 0,
        max: 256,
    },
    defaultText : String,
    regExp : String,
    valid : Number,
    errormessage : String,
    placeholder : String,
    required: Boolean,
    autofocus: Boolean,
    disabled : Boolean,
    textsize : String,
    textcolor : String,
    fontstyle : String,
    id: Number,
    
},{
    timestamps: true
});

const Input = mongoose.model('Input',inputSchema);
export default Input;