import {action, makeAutoObservable, observable, toJS} from 'mobx';


export interface Error{
    id:number;
    msg:string;
}
export interface DragEvent<T = Element> extends React.MouseEvent<T, Event> {
    dataTransfer: DataTransfer;
}

export interface Dragobject {
    type:string;
    freshness: string;
    id:number;
}

export interface User{
    _id: string;
    name:string;
    email:string;
    token: string;
}

export interface Chartdata{
    x:string;
    y: number;
}

class Store{
    user:User = {
        _id: '',
        name:'',
        email:'',
        token:'',
    };
    appSave: boolean = false;
    newapp: string = 'old';
    appName: string = 'Application Name';
    canvasSize:number = 1024;
    canvasprevioustype:string = 'fullscreen';
    properties:string = '';
    listItems:any[] = [];
    labelName:string = '';
    backgroundColorButton: string = 'bg-green-500';
    borderRadius:string = '';
    boxshadow:string = '';
    shadowColor:string = 'rgba(251, 191, 36,1)';
    buttonVariant = 'primary';
    componentIdChangeProperty:number = 0;
    buttonDisable:boolean = false;
    newItem:any = {};
    propertyItem: any = {};
    chartXYData: Chartdata[] = [
        {
            x:'product1',
            y:2000
        },{
            x:'product2',
            y:2200
        },{
            x:'product3',
            y:3200
        }
    ];

    constructor(){
        makeAutoObservable(this,{
            appName: observable,
            newapp: observable,
            user: observable,
            newItem: observable,
            propertyItem: observable,
            canvasSize: observable,
            setuserlogin: action,
            properties: observable,
            listItems: observable,
            labelName: observable,
            buttonDisable: observable,
            buttonVariant: observable,
            backgroundColorButton: observable,
            borderRadius: observable,
            boxshadow: observable,
            shadowColor: observable,
            componentIdChangeProperty: observable,
            chartXYData: observable,
        })
    }

    setuserlogin(updateduser:User){
        this.user = updateduser;
    }

    
    
    
}

const store = new Store();
export default store;