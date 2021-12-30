import { observer } from 'mobx-react'
import React from 'react'
import store from '../../store';

function Audiocomponent(props:{height:string;width:string;data:string;id:number;src:string|undefined;x:number;y:number;muted:boolean;loop:boolean;autoplay:boolean }) {

    return (
        <audio controls muted={props.muted} loop={props.loop} autoPlay={props.autoplay} 
        style={{
            position:'absolute',
            top: props.y,
            left: props.x,
            width: props.width,
            height: props.height,
        }}
        className={`${props.muted && 'muted'} ${props.autoplay && 'autoplay'} 
        ${props.loop && 'loop'}`}
        draggable
        onDragStart={(e:any) => {
            // let innertext = e.target.innerText.replace(/[^a-z]/gi, '');
            let dragobject = JSON.stringify({'type':'audio','freshness':'old','id':props.id});
            e.dataTransfer.setData('dragobject',dragobject);
        }}
        onMouseEnter={() => {
            store.properties = 'audio';
            store.componentIdChangeProperty=props.id;

        }}
        >
            <source src={props.src} type="audio/ogg" />
            <source src={props.src} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default observer(Audiocomponent);
