import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { getallapps } from '../api';
import { PrivateGetMethod } from '../ApiFunctions/AllMethod';
import { ArrayToObject } from '../HelperFunctions/Conversion';
import { hmtltagSelectFile, htmltagAudio, htmltagButton, htmltagChart, htmltagCheckbox, htmltagContainer, htmltagDate, htmltagDivider, htmltagImage, htmltagInput, htmltagText, htmltagVideo } from '../Names';
import store, { DragEvent, Dragobject, Error } from '../store';
import { Errortoast } from '../Toast/ErrorToast';
import { newAudioButton, newButtonItem, newChart, newCheckbox, newContainer, newDate, newDivider, newImage, newInput, newSelectFile, newText, newVideo } from './objects';
import AudioComponent from './StyledComponents/AudioComponent';
import ChartComponent from './StyledComponents/ChartComponent';
import Checkboxcomponent  from './StyledComponents/CheckboxComponent';
import Buttons1 from './StyledComponents/Components';
import ContainerComponent from './StyledComponents/ContainerComponent';
import DateComponent from './StyledComponents/DateComponent';
import DividerComponent from './StyledComponents/DividerComponent';
import ImageComponent from './StyledComponents/ImageComponent';
import InputComponent from './StyledComponents/InputComponent';
import SelectFileComponent from './StyledComponents/SelectFileComponent';
import TextComponent from './StyledComponents/TextComponent';
import VideoComponent from './StyledComponents/VideoComponent';

export default observer(function Editbodymiddle() {
    const {id} = useParams();
    const [errarr,seterrarr] = useState<Error[]>([]);

    useEffect(() => {
        async function DataFetch(){
            if(id && id.length !== 1){
                const datafromurl = await PrivateGetMethod(`${getallapps}/${id}`,{
                    headers:{
                        Authorization: `Bearer ${store.user.token}`
                    }
                });
                if(datafromurl.status !== 200){
                    seterrarr([...errarr , {
                        id: new Date().getTime(),
                        msg: datafromurl.data.message,
                    }])
                }else{
                    store.listItems=[];
                    store.newapp = 'old';
                    store.appName = datafromurl.data.name; 
                    if (datafromurl.data.button) ArrayToObject(datafromurl.data.button);
                    if(datafromurl.data.audio) ArrayToObject(datafromurl.data.audio);
                    if(datafromurl.data.container) ArrayToObject(datafromurl.data.container);
                    if(datafromurl.data.checkbox) ArrayToObject(datafromurl.data.checkbox);
                    if(datafromurl.data.chart) ArrayToObject(datafromurl.data.chart);
                    if(datafromurl.data.input) ArrayToObject(datafromurl.data.input);
                    if(datafromurl.data.text) ArrayToObject(datafromurl.data.text);
                    if(datafromurl.data.video) ArrayToObject(datafromurl.data.video);
                    if(datafromurl.data.image) ArrayToObject(datafromurl.data.image);
                    if(datafromurl.data.divider) ArrayToObject(datafromurl.data.divider);
                    if(datafromurl.data.selectFile) ArrayToObject(datafromurl.data.selectFile);
                    if(datafromurl.data.date) ArrayToObject(datafromurl.data.date);
                 }
            }
            else{
                store.listItems = [];
                store.properties = '';
                store.componentIdChangeProperty=0;
                store.newapp = 'new';
            }
            }
            
        DataFetch();
        
    },[id])

    const location = useLocation();
    let word = location && location.hash && location.hash.slice(1,);
    if(!word) word = '';
    let newItem:any = {};
    const ondragover = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const ondrop = (e: any) => {
        let dragobject:Dragobject = JSON.parse(e.dataTransfer.getData('dragobject'));
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        if( dragobject.type ===  htmltagAudio) newItem = newAudioButton(e,dragobject)
        else if(dragobject.type === htmltagButton)  newItem = newButtonItem(e,dragobject)
        else if(dragobject.type === htmltagCheckbox) newItem = newCheckbox(e,dragobject)
        else if(dragobject.type === htmltagContainer) newItem = newContainer(e,dragobject)
        else if(dragobject.type === htmltagChart) newItem = newChart(e,dragobject)
        else if(dragobject.type === htmltagInput) newItem = newInput(e,dragobject)
        else if(dragobject.type === htmltagText) newItem = newText(e,dragobject)
        else if(dragobject.type === htmltagDate) newItem = newDate(e,dragobject)
        else if(dragobject.type === htmltagImage) newItem = newImage(e,dragobject)
        else if(dragobject.type === htmltagDivider) newItem = newDivider(e,dragobject) 
        else if(dragobject.type === hmtltagSelectFile) newItem = newSelectFile(e,dragobject)
        else if(dragobject.type === htmltagVideo) newItem = newVideo(e,dragobject)
        if(dragobject.freshness === 'new'){
            store.listItems = [...store.listItems, newItem]
        }else{
                store.listItems = store.listItems.filter((ele) => {
                    if(ele.id === dragobject.id){
                        let object = {'x':newItem.x,'y':newItem.y}
                        return Object.assign(ele,object);
                    }else return ele;
                })
        }
        
    }
    const closetoast = (e: React.MouseEvent<HTMLElement>, ids: number) => {
        seterrarr(errarr.filter(item => item.id !== ids))
    }

    const handledelete = (e: React.KeyboardEvent<HTMLElement>) => {
        if(store.properties ){
            if (e.key !== undefined) {
                if(e.key === 'Delete'){
                    store.listItems = store.listItems.filter(item => item.id !== store.componentIdChangeProperty);
                    store.componentIdChangeProperty = 0;
                    store.properties = '';
                }
              } 
        }
    }
  
    return (
        <div className='flex-1 overflow-x-scroll border-r overflow-y-scroll scrollbar-hide text-center p-6 grid justify-items-center' >
            <div className={`w-${store.canvasSize} h-1024 overflow-y-scroll bg-gray-200 relative`} onDragOver={ondragover} onDrop={ondrop} >
                {store.listItems.length > 0 && store.listItems.map((item) => (
                    <div key={item.id} onKeyDown={handledelete}>
                        {item.element === 'audio' ?   <AudioComponent  {...item} />   :
                        item.element === 'button' ?   <Buttons1 {...item} />          :
                        item.element === 'checkbox' ? <Checkboxcomponent {...item} /> : 
                        item.element === 'container' ? <ContainerComponent {...item} />:
                        item.element === 'chart' ? <ChartComponent {...item} /> :
                        item.element === 'input' ? <InputComponent {...item} /> :
                        item.element === 'text' ? <TextComponent {...item} /> :
                        item.element === 'date' ? <DateComponent {...item} /> :
                        item.element === 'image' ? <ImageComponent {...item} /> :
                        item.element === 'divider' ? <DividerComponent {...item} />:
                        item.element === 'selectfile' ? <SelectFileComponent {...item} />:
                        item.element === 'video' ? <VideoComponent {...item} />:
                        <div>nothing</div>}
                    </div>
                ))}
            </div>
            <Errortoast closetoast={closetoast}>
                    {errarr}
                </Errortoast>
           
        </div>
    )
})
