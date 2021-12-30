import { observer } from 'mobx-react';
import React from 'react'
import { htmltagText } from '../../Names';
import store from '../../store';

function Textcomponent(props: {width:string;height:string; y: number; x: number; textAlign: any; borderWidth: string; borderColor: string; textcolor: string; textsize: string; fontstyle: string; background: string; id: number; data: string; }) {

    return (
        <p style={{
            position: 'absolute',
            top: props.y,
            left: props.x ,
            width:props.width,
            height:props.height,
            padding: '8px',
            textAlign: props.textAlign,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            color: props.textcolor,
            fontSize: props.textsize,
            fontWeight: props.fontstyle,
            fontStyle: props.fontstyle,
            background: props.background,
        }}
        tabIndex={0}
        className={`text-${props.textAlign} min-w-max min-h-max`}
        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagText,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'text';
            store.componentIdChangeProperty = props.id;
        }}>
           {props.data} 
        </p>
    )
}

export default observer(Textcomponent)