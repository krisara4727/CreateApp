import { observer } from 'mobx-react'
import React from 'react'
import { hmtltagSelectFile } from '../../Names';
import store from '../../store';

function Selectfilecomponent(props: {width:string;height:string;required:boolean;disabled:boolean;data:string; y: number; x: number;id: number; allowedTypes: string | undefined; }) {
    

    return (
        <form
        style={{
            position: 'absolute',
            top: props.y,
            left: props.x,
           
        }}
        draggable
        tabIndex={0}
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':hmtltagSelectFile,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'selectfile';
            store.componentIdChangeProperty = props.id;
        }}>
            <label htmlFor='selected' className='bg-green-500 p-2 text-white '>{props.data}</label>
            <input type='file' id='selected' multiple 
            required={props.required}
            disabled={props.disabled}
            accept={props.allowedTypes} 
            style={{
            display: 'none',
            background: 'green',
            width:props.width,
            height:props.height,
            }}
            className='focus:outline-none'
            />
            
        </ form>
    )
}

export default observer(Selectfilecomponent)