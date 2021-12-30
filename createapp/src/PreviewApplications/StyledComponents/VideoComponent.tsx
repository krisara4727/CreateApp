import { observer } from 'mobx-react'
import React from 'react'
import { htmltagVideo } from '../../Names';
import store from '../../store';

function Videocomponent(props: {width:string;height:string; y: number; x: number; id: number; autoplay: boolean | undefined; src: string | undefined; }) {
    

    return (
        <div style={{
            position: 'absolute',
            top: props.y,
            left: props.x,
            
        }}
        draggable
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':htmltagVideo,'freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'video';
            store.componentIdChangeProperty = props.id;
        }}>
            <video width="320" height="240" controls autoPlay={props.autoplay}
            style={{
                width:props.width,
                height:props.height,
            }}>
            <source src={props.src} type="video/mp4" />
            <source src={props.src} type="video/ogg" />
            Your browser does not support the video tag.
            </video>
            
        </div>
    )
}


export default observer(Videocomponent);