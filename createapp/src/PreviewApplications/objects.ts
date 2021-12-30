import { defaultBgButton, defaultBorderColor, defaultBorderRadius, defaultBorderWidth, defaultBoxShadow, defaultButton, defaultlabelcheckbox, defaultShadowColor, defaultTextAlign } from "../Names";
import audio1 from '../AudionVideos/audio1.mp3';
import { Dragobject } from "../store";

export const newButtonItem = (e:any,dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        data: defaultButton, 
        x: x,
        y: y,
        freshness: 'old',
        width: '8rem',
        height: '2rem',
        borderRadius: defaultBorderRadius,
        background: defaultBgButton,
        borderColor: defaultBorderColor,
        borderWidth: defaultBorderWidth,
        boxShadow: defaultBoxShadow,
        shadowColor: defaultShadowColor,
        textAlign: defaultTextAlign,
        disabled: false,
    };
}

export const newAudioButton = (e:any,dragobject:Dragobject) => {
    let newItem ;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id : new Date().getTime(),
        element: dragobject.type,
        data: dragobject.type,
        x: x,
        y: y,
        freshness: 'old',
        loop: false,
        src: audio1,
        muted: false,
        autoplay: false
    }
}

export const newCheckbox = (e:any,dragobject:Dragobject) => {
    let newItem ;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        freshness: 'old',
        checked:true,
        label: defaultlabelcheckbox,
        alignment: 1,

    }
}

export const newContainer = (e:any, dragobject:Dragobject) => {
    let newItem ;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        width: '200px',
        height: '300px',
        minHeight: '200px',
        freshness: 'old',
        background: '#ffffff',
        borderColor: 'transparent',
        borderWidth: '1px',
        boxshadow: '',
        borderRadius: '0px',
        shadowColor: '#fff',
    }
}

export const newChart = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        data: 'sales Report',
        xaxislabel: 'x-axis',
        yaxislabel: 'y-axis',
        width: '300px',
        height: '200px',
        xlabel: ['krishna','mahesh','rushi'],
        ydata: [30,10,20],
        background: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
    }
}

export const newInput = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return  newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        type: 'text',
        maxchars: 256,
        defaultText: '',
        regExp: '',
        valid: 0,
        errormessage: 'Error',
        placeholder: '',
        label: '',
        required: false,
        autofocus: false,
        disabled: false,
        textsize: '16px',
        textcolor: 'black',
        fontstyle: '',
    }
}

export const newText = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        textAlign: defaultTextAlign,
        background: 'white',
        data : 'label',
        textcolor: 'black',
        borderColor: 'black',
        borderWidth: '0px',
        textsize: '16px',
        fontstyle: 'sans-serif',
    }

}

export const newDate = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        data: '2021-12-23',
        minDate: '1921-01-01',
        maxDate: '2121-12-31',
    }
}


export const newImage = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        src: 'https://assets.appsmith.com/widgets/default.png',
        data: 'image name',
        objectFit: 'contain',
        width: '200px',
        height: '200px',
    }
}

export const newDivider = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        direction: 0,
        style: 'solid',
        background: 'gray',
        width: '50px',
        height: '4px',
    }
}

export const newSelectFile = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        data: 'select file',
        maxfilesize: 5,
        allowedTypes: "",
        required: true,
        disabled: false,
    }
}

export const newVideo = (e:any, dragobject:Dragobject) => {
    let newItem;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    return newItem = {
        id: new Date().getTime(),
        element: dragobject.type,
        x: x,
        y: y,
        src: 'https://assets.appsmith.com/widgets/bird.mp4',
        autoplay: true,
    }
}