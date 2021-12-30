import { observer } from 'mobx-react';
import React from 'react'
import { htmltagDivider } from '../../Names';
import store from '../../store';

function Dividercomponent(props: { y: number; x: number; width: string; height: string; direction: any; style: string; background: string; id: number; }) {
    

    return (
        <div style={{
            position: 'absolute',
            top: props.y ,
            left: props.x ,
            width: props.width,
            height: props.height,
            transform: `rotate(${props.direction}deg)`,
            borderStyle: props.style,
            background: props.background,
        }}
        draggable
        tabIndex={0}
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagDivider,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'divider';
            store.componentIdChangeProperty = props.id;
        }}>
            
        </div>
    )
}

export default observer(Dividercomponent);