import { ArrowDropDown, Check, Comment, Edit, Home, PersonalVideo, QuestionAnswer, Share } from '@material-ui/icons'
import axios from 'axios';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteapp, getallapps, updateapp } from '../api';
import {  PrivateDeleteMethod, PrivatePostMethod, PrivatePutMethod } from '../ApiFunctions/AllMethod';
import { succesfulCreate, succesfulDelete, successfulUpdate } from '../Messages';
import store, { Error } from '../store'
import { Errortoast } from '../Toast/ErrorToast';
import Profileicon from './ProfileIcon';

function Editheader() {
    const [errarr,seterrarr] = useState<Error[]>([]);

    const {id} = useParams();
    const [arrowclick, setarrowclick] = useState<boolean>(false);
    const navigate = useNavigate();
    const handlePostApp = async() => {
        let list = store.listItems;
        let button:any[]=[],audio:any[]=[],chart:any[]=[],checkbox:any[]=[],container:any[]=[],input:any[]=[],text:any[]=[],divider:any[]=[],image:any[]=[],video:any[]=[],date:any[]=[],selectfile: any[]=[];
        for(let i=0; i<list.length; i++){
            if (list[i].element === 'button'){ button.push(list[i]) }
            else if (list[i].element === 'selectfile') selectfile.push(list[i])
            else if (list[i].element === 'audio') audio.push(list[i])
            else if (list[i].element === 'checkbox') checkbox.push(list[i])
            else if (list[i].element === 'container') container.push(list[i])
            else if (list[i].element === 'input') input.push(list[i])
            else if (list[i].element === 'text') text.push(list[i])
            else if (list[i].element === 'divider') divider.push(list[i])
            else if (list[i].element === 'image') image.push(list[i])
            else if (list[i].element === 'video') video.push(list[i])
            else if (list[i].element === 'date') date.push(list[i])
            else if (list[i].element === 'chart') chart.push(list[i])
        }
        let appname = store.appName;
        let data = {
            button,
            audio,
            container,
            checkbox,
            chart,
            input,
            text,
            divider,
            video,
            image,
            date,
            selectfile,
            name: appname,
            canvasSize: store.canvasSize,
        }
        if(store.newapp === 'new'){
            const datafromurl = await PrivatePostMethod(`${getallapps}`,data,{
                headers:{
                    Authorization: `Bearer ${store.user.token}`
                }
            });
            if(datafromurl.status === 200){
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: succesfulCreate,
                }]);
            }else{
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: datafromurl.data && datafromurl.data.message,
                }]);
            }
            console.log('data after newness ',datafromurl)
        }else{
            console.log('before updating ',toJS(data.chart[0]));
            const datafromurl = await PrivatePutMethod(`${updateapp}/${id}`,data,{
                headers:{
                    Authorization: `Bearer ${store.user.token}`
                }
            });
            if(datafromurl.status === 200){
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: successfulUpdate,
                }]);
            }else{
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: datafromurl.data && datafromurl.data.message,
                }]);
            }
            console.log('data after updating ',datafromurl)
        }
    }

    const handleAppNameEdit = (e: React.MouseEvent<HTMLLIElement>) => {
        
    }

    const handleAppDelete = async (e: React.MouseEvent<HTMLLIElement>) => {
        if(window.confirm('Are you sure You want to delete?')){
            setarrowclick(!arrowclick);
            const datafromurl = await PrivateDeleteMethod(`${deleteapp}/${id}`,{
                headers: {
                    Authorization: `Bearer ${store.user.token}`
                }
            });
            if(datafromurl.status === 200){
                store.listItems= [];
                store.componentIdChangeProperty = 0;
                store.properties = '';
                store.appName = 'Default Name'
                const timeout = setTimeout(() => {
                    navigate('/');
                },2000);
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: succesfulDelete,
                }]);
                // clearTimeout(timeout);
            }else{
                seterrarr([...errarr , {
                    id: new Date().getTime(),
                    msg: datafromurl.data && datafromurl.data.message,
                }]);
            }
            console.log('deleted ',datafromurl);
        }
    }

    const closetoast = (e: React.MouseEvent<HTMLElement>, ids: number) => {
        seterrarr(errarr.filter(item => item.id !== ids))
    }

    return (
        <div className='w-full flex items-center py-1 border-b'>
            <div className='mx-2 flex items-center relative'>
                <Link to='/'><Home style={{fontSize:'20'}}/></Link>
                <input className='ml-3 mr-1 font-medium focus:outline-none' 
                readOnly={!arrowclick} 
                value={store.appName} 
                onChange = {(e) => store.appName = e.target.value}
                />
                <ArrowDropDown style={{fontSize:'20'}} className='mr-4' onClick={() => setarrowclick(!arrowclick)} />
                <Edit style={{fontSize:'20'}} className='mr-3'/>
                <Comment style={{fontSize:'20'}} className='mr-3'/>
                <PersonalVideo style={{fontSize:'20'}} className='mr-1' />
            </div>
            {arrowclick && (
                <ul className='p-2 absolute z-10 top-10 left-10 bg-gray-300 w-36 cursor-pointer '>
                    <li className='px-2 py-1 border-b hover:bg-gray-500' 
                    onClick={handleAppNameEdit}>Rename/Edit</li>
                    <li className='px-2 py-1 border-b hover:bg-gray-500'
                    onClick={handleAppDelete}>Delete App</li>
                </ul>
            )}
            <div className='flex bg-gray-200 mr-3'>
                <div className='flex-1'>
                    <p className='text-xs p-1'>Quick search & navigation</p>
                </div>
                <div>
                    <p className='text-xs p-1'>cmd + k</p>
                </div>
            </div>
            <div className='flex-1'>
                <QuestionAnswer style={{fontSize:'20'}} />
            </div>
            <div className='flex mr-3'>
                <div className='w-5 h-5 rounded-full bg-green-300 flex items-center justify-center'>
                    <Check style={{fontSize:'15',color:'white'}}/>   
                </div>
            </div>
            <div className='flex items-center'>
                <Share style={{fontSize:'15',color:'red'}}/>
                <p className='text-xs uppercase font-medium mr-3 ml-2'>
                    Share
                </p>  
            </div>
            
            <div className='flex items-center px-3 bg-yellow-500 cursor-pointer' onClick={handlePostApp} >
                <p className='text-sm text-white font-medium uppercase pr-1'>deploy</p>
                <ArrowDropDown style={{fontSize:'15',color:'white'}}/>
            </div>
            <Profileicon />
            <Errortoast closetoast={closetoast}>
                    {errarr}
                </Errortoast>
        </div>
    )
}

export default observer(Editheader);