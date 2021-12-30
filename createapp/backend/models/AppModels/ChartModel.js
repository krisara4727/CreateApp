import mongoose from 'mongoose';

const chartSchema = new mongoose.Schema({
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
    xaxislabel: {
        type: String
    },
    yaxislabel: {
        type: String,
    },
    xlabel: [{
        type:String
    }],
    ydata: [{
        type: String
    }],
    
},{
    timestamps: true
});

const Chart = mongoose.model('Chart',chartSchema);
export default Chart;