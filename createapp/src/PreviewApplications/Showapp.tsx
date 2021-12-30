import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getallapps } from '../api';
import { PrivateGetMethod } from '../ApiFunctions/AllMethod';
import { ArrayToObject } from '../HelperFunctions/Conversion';
import store, { Error } from '../store';
import { Errortoast } from '../Toast/ErrorToast';
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

function Showapp() {
    const {id} = useParams();
    const [errarr,seterrarr] = useState<Error[]>([]);

    useEffect(() => {

        async function fetchData(){
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
                store.appName=datafromurl.data.name;
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
        fetchData();
    },[id]);
    const closetoast = (e: React.MouseEvent<HTMLElement>, ids: number) => {
        seterrarr(errarr.filter(item => item.id !== ids))
    }

    return (
        <div className='w-screen h-screen p-4'>
            <p>{store.appName}</p>
            <div className={`w-1024 h-screen overflow-y-scroll bg-gray-300 relative justify-center items-center mx-auto`}  >
                {store.listItems.length > 0 && store.listItems.map((item) => (
                    <div key={item.id}>
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
}


export default observer(Showapp)