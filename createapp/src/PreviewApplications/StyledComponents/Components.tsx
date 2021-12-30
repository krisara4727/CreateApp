import { observer } from "mobx-react";
import store from "../../store";

function Buttons1(props: {width:string;height:string; y: any; data: string; element:string; x: any; id: any;background: string;borderWidth: string,
    borderColor: string,borderRadius: string,boxShadow: string,shadowColor: string,textAlign: string,disabled: boolean}){ 

    return <button style={{
        position:'absolute',
        top: props.y,
        left: props.x,
        width: props.width,
        height: props.height,
        background:props.background,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
        WebkitBoxShadow: props.shadowColor,
        // textAlign: props.textAlign,
    }}
    disabled={props.disabled}
    className={`${props.background} ${props.borderColor} ${props.borderWidth} uppercase min-h-max
    ${props.boxShadow} ${props.disabled && 'opacity-25'} text-${props.textAlign} min-w-max nodrop`}
    draggable
    onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':'button','freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}
    onClick={() => {
        store.properties='button';
        let bg = props.background
        if(props.background === 'transparent') bg = props.borderColor;
        store.backgroundColorButton = bg;
        store.componentIdChangeProperty=props.id;
    }}
    >
        {props.data}
    </button>
}

export default observer(Buttons1)