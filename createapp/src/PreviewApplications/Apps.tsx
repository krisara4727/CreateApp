import { AppsOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PrivateGetMethod } from '../ApiFunctions/AllMethod';
import { randomColors } from '../HelperFunctions/Randomcolors';
import { getallapps } from '../api';
import store from '../store';
import { toJS } from 'mobx';

export function Apps() {

    useEffect(() => {
            
        async function dataFetch(){
            const datafromurl = await PrivateGetMethod(getallapps,{
                headers:{
                    Authorization: `Bearer ${store.user.token}`
                }
            });
            if(datafromurl.status === 200){
                setapps(datafromurl.data)
            }
        }
        dataFetch();
    },[])
    const [apps, setapps] = useState<any[]>([]);

    return (
        <div className='px-6 pb-3 mt-2 flex flex-wrap ' >
            {apps && apps.length !== 0 && apps.map((app) => (
                <div onMouseOver={(e: React.MouseEvent) => {
                    let element = app._id;
                    let object = document.getElementById(element);
                    if(object)  object.style.display = 'flex';
                }} 
                onMouseLeave={(e: React.MouseEvent) => {
                    let element = app._id;
                    let object = document.getElementById(element);
                    if(object)  object.style.display = 'none';
                }}
                className='relative hover:blur-xl m-3'
                
                key={app._id}
                >
                <div style={{width:'200px',height:'110px',background:randomColors()}} className='p-3 
                flex items-center hover:blur-md' 
                >
                    <p className='capitalize font-medium text-gray-700 flex-1'>{app.name}</p>
                    <div className=' bg-white flex justify-center items-center '
                    style={{width:'2.5rem',height:'2.5rem', borderRadius:'100%'}}
                    >
                        <AppsOutlined />
                    </div>
                </div> 
                {
                    <div className='absolute w-full top-0 hidden items-center  h-full transition-all duration-300 bg-pink-50 
                    blur-md' id={app._id}>
                        <div className='w-full flex-1 mr-2 '>
                            <Link to={`/application/edit/${app._id}`}>
                            <button className='uppercase px-2 py-1 mr-2 w-full font-medium bg-yellow-600 text-white text-sm'>Edit</button>
                            </Link>
                        </div>
                        <div className='flex-1 w-full '>
                            <Link to={`/application/${app._id}`}>
                                <button className='uppercase px-2 py-1 w-full font-medium bg-black text-white text-sm '>Launch</button>
                            </Link>
                        </div>
                    </div>
                }
            </div>
            ))}
                    
                    
        </div>
    )
}
