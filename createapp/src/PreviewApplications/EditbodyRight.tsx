import { observer } from 'mobx-react';
import React from 'react'
import { useLocation } from 'react-router'
import store from '../store';
import Defaultcanvas from './Editbody/Defaultcanvas';
import { Audio, Button, Chart, Checkbox, Container, Date, Divider, Image, Input, SelectFile, Text, Video } from './Htmlitems/Button';

function Editbodyright() {
    const location = useLocation();
    const word = location && location.hash;
    let hashword = word && word.slice(1,)
    if(!hashword){
        hashword = '';
    }
    
    return (
        <div className='w-250 p-3 h-screen border-l overflow-y-scroll pb-10' >
            {
                !store.properties  ? <Defaultcanvas /> 
                : store.properties === 'button' ? <Button id={store.componentIdChangeProperty}/>
                : store.properties === 'audio' ? <Audio id={store.componentIdChangeProperty} /> 
                : store.properties === 'checkbox' ? <Checkbox id={store.componentIdChangeProperty} />
                : store.properties === 'container' ? <Container id={store.componentIdChangeProperty} /> 
                : store.properties === 'chart' ? <Chart id={store.componentIdChangeProperty} /> 
                : store.properties === 'input' ? <Input id={store.componentIdChangeProperty} />
                : store.properties === 'text' ? <Text id={store.componentIdChangeProperty} />
                : store.properties === 'date' ? <Date id={store.componentIdChangeProperty} /> 
                : store.properties === 'image' ? <Image id={store.componentIdChangeProperty} />
                : store.properties === 'divider' ? <Divider id={store.componentIdChangeProperty} />
                : store.properties === 'selectfile' ? <SelectFile id={store.componentIdChangeProperty} />
                : store.properties === 'video' ? <Video id={store.componentIdChangeProperty} />
                : 'nothing'
            }
        </div>
    )
}

export default observer(Editbodyright);