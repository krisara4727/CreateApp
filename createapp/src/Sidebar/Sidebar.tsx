import React from 'react';
import { Appname } from '../Appname';
import AddIcon from '@material-ui/icons/Add';
import store from '../store';
import WhatShot from '@material-ui/icons/Whatshot';
import AssistantIcon from '@material-ui/icons/Assistant';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MapIcon from '@material-ui/icons/Map';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export function Sidebar():JSX.Element {
    return (
        <div className='flex flex-col py-2 pl-3  lg:w-1/5 xl:w-1/6 border-r'>
            <Appname />
            <div className='flex flex-col flex-1'>
                <div className='px-3 py-2'>
                    <p className='uppercase font-semibold text-gray-900 text-sm'>Organizations</p>
                </div>
                <div className='cursor-pointer'>
                    <div className='flex mt-2 items-center px-3 py-2 hover:bg-gray-300'>
                        <AddIcon style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>New Organizations</p>
                    </div>
                    <div className='flex items-center px-3 py-2 bg-gray-300'>
                        <WhatShot style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>{store.user.name}'s apps</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='cursor-pointer'>
                    <div className='flex mt-2 items-center px-3 py-2 hover:bg-gray-300'>
                        <AssistantIcon style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>Join our Discord</p>
                    </div>
                    <div className='flex items-center px-3 py-2 hover:bg-gray-300'>
                        <MenuBookIcon style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>Documentation</p>
                    </div>
                    <div className='flex mt-2 items-center px-3 py-2 hover:bg-gray-300'>
                        <MapIcon style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>Welcome Tour</p>
                    </div>
                    <div className='flex items-center px-3 py-2 hover:bg-gray-300'>
                        <CardGiftcardIcon style={{fontSize:'15'}}/>
                        <p className='ml-2 text-sm text-gray-700'>What's New?</p>
                    </div>
                    
            </div>
            
        </div>
    </div>

    )
}
