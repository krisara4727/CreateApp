import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema({
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
    minDate : Date,
    maxDate : Date,
    id: Number,
    
},{
    timestamps: true
});

const DateInput = mongoose.model('DateInput',dateSchema);
export default DateInput;