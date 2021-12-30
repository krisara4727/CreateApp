import { observer } from 'mobx-react'
import React from 'react'
import { htmltagInput } from '../../Names';
import store from '../../store';

function Inputcomponent(props: {width:string;height:string; y: number; x: number; id: number; fontstyle: any; textcolor: any; textsize: any; label: string; defaultText: string ; placeholder: string | undefined; type: string ; maxchars: number | undefined; required: boolean | undefined; disabled: boolean | undefined; autofocus: boolean | undefined; }) {

    return (
        <div style={{
            position: 'absolute',
            top: props.y,
            left: props.x ,
        }}
        className=' flex'
        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagInput,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'input';
            store.componentIdChangeProperty = props.id;
        }}>
        <p style={{
            fontWeight: props.fontstyle,
            fontStyle: props.fontstyle,
            color: props.textcolor,
            fontSize: props.textsize
        }}>{props.label}</p>
    <input 
        value={props.defaultText}
        placeholder={props.placeholder}
        type={props.type}
        maxLength={props.maxchars}
        required={props.required}
        disabled={props.disabled}
        autoFocus={props.autofocus}
        className={`border ${props.disabled && 'cursor-not-allowed w-full h-full'}
        ${props.required && 'required'}
        `}
        style={{
            width:props.width,
            height:props.height,
        }}
        >
            
        </input>
        </div>
        
    )
}

export default observer(Inputcomponent)
