import mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    canvasSize: Number,
    button: [{
        element: String,
        data: String,
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
        boxShadow: {
            type: String,
        },
        shadowColor: {
            type: String
        },
        textAlign: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        id: Number,
    }],
    audio: [{
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
    }],
    chart: [{
        element: String,
        data: String,
        x: Number,
        y:  Number,
        freshness: String,
        width: String,
        height: String,
        xaxislabel: String,
        yaxislabel: String,
        xlabel: [String ],
        ydata: [Number],
        background: String,
        borderColor: String,
        borderWidth: Number,
        id: Number,
    }],

    container: [{
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
        boxShadow: {
            type: String,
        },
        shadowColor: {
            type: String
        },
        id: Number,
    }],
    checkbox: [{
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
    }],
    input: [{
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
        type: {
            type:String,
        },
        maxchars: {
            type: Number,
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
    }],
    text: [{
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
        textAlign: {
            type: String,
        },
        textsize : String,
        textcolor : String,
        fontstyle : String,
        id: Number,
    }],
    date: [{
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
    }],
    selectFile: [{
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
    }],
    video: [{
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
    }],
    divider: [{
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
    }],
    image: [{
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
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps: true
});

const App = mongoose.model("App",appSchema);
export default App;

