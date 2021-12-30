import React from 'react';
import {Link } from 'react-router-dom';
import svg from '../AudionVideos/pageNotFound.svg';
import backhome from '../AudionVideos/backHome.svg';

export function Routenotfound() {
    

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Link to='/' className='text-blue-600 font-italic text-lg p-4 text-center flex items-center justify-center' >
                <img src={backhome} alt='' className='w-16 h-16 rounded-full' />
                <p className='underline'>Back to Home Page</p></Link>
            <div className="flex-1 flex items-center justify-center p-4">
                <img src={svg} alt='404 Page Not Found' />
            </div>
            
        </div>
    )
}
