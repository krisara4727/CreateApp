import { observer } from 'mobx-react'
import React from 'react'
import { htmltagImage } from '../../Names';
import store from '../../store';

function Imagecomponent(props: { y: number; x: number; width: string; height: string; objectFit: any; src: string | undefined; data: string | undefined; id: number; }): JSX.Element {
    

    return (
        <img style={{
            position: 'absolute',
            top: props.y ,
            left: props.x ,
            width: props.width,
            height: props.height,
            objectFit: props.objectFit,
        }}
        tabIndex={0}
        src={props.src}
        alt={props.data}

        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagImage,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'image';
            store.componentIdChangeProperty = props.id;
        }}>

        </img>
            
        
    )
}

export default observer(Imagecomponent);
