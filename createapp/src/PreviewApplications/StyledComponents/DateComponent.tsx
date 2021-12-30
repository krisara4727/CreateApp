import { observer } from 'mobx-react';
import React from 'react'
import { htmltagDate } from '../../Names';
import store from '../../store';

function Datecomponent(props: {width:string;height:string;minDate: string; maxDate: string; y: number; x: number; id: number; data: string | number  }) {
    

    return (
        <form style={{
            position: 'absolute',
            top: props.y ,
            left: props.x,
            
        }}
        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagDate,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'date';
            store.componentIdChangeProperty = props.id;
        }}>
            <input type='date' value={props.data} min={props.minDate} max={props.maxDate}
            style={{
                width:props.width,
                height:props.height,
            }}
            />
            
        </form>
    )
}


export default observer(Datecomponent);