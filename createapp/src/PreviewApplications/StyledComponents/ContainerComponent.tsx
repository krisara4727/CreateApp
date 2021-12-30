import { observer } from 'mobx-react'
import React from 'react';
import store from '../../store';

function Containercomponent(props: { id:number; minHeight:string; width:string; height: string; y: number; x: number; background: any; borderWidth: any; borderColor: any; borderRadius: any; boxShadow: any; shadowColor: any; }) {
    

    return (
        <div style={{
            position:'absolute',
            top: props.y,
            left: props.x,
            width: props.width,
            height: props.height,
            minHeight: props.minHeight,
            background:props.background,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            borderRadius: props.borderRadius,
            boxShadow: props.boxShadow,
            WebkitBoxShadow: props.shadowColor,
        }}
        tabIndex={0}
        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':'container','freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}
    onClick={() => {
        store.properties='container';
        store.componentIdChangeProperty=props.id;
    }}
        >
            
        </div>
    )
}


export default observer(Containercomponent);