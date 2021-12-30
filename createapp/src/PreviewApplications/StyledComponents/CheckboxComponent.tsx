import { observer } from 'mobx-react';
import React from 'react'
import store from '../../store';

function Checkboxcomponent(props:{width:string;height:string;id:number;y:number;x:number;label:string;checked:boolean;alignment:number;}) {

    return (
        <form style={{
            position:'absolute',
            top: props.y,
            left: props.x,
            width:props.width,
            height:props.height,
            minWidth:'100px',
        }}
        draggable
        tabIndex={0}
    onDragStart={(e:any) => {
        // let innertext = e.target.innerText.replace(/[^a-z]/gi, '');
        let dragobject = JSON.stringify({'type':'checkbox','freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}
    onClick={() => {
        store.properties = 'checkbox';
        store.componentIdChangeProperty = props.id;

    }}
    className='grid grid-cols-2 grid-rows-1 w-12 h-6'
    >
            
            <input type='checkbox' name={''+props.id} checked={props.checked} className={`mr-2 w-1/2 h-5 col-start-${props.alignment ? '2' : '1'} col-end-${props.alignment ? '3' : '2'}`}/>
            <label htmlFor={''+props.id} className={`capitalize w-1/2 text-center `}>{props.label}</label>
        </form>
    )
}


export default observer(Checkboxcomponent)