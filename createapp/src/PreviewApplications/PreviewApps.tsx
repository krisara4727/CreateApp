import { MoreHorizRounded, Share } from '@material-ui/icons';
import Add from '@material-ui/icons/Add';
import React from 'react'
import { Link } from 'react-router-dom';
import { Appsearch } from '../search/Appsearch';
import store from '../store';
import { Apps } from './Apps';

function Previewapps() {
    

    return (
        <div className='flex-1 p-1'>
           <Appsearch />
           <div className='p-3 flex items-center'>
               <div className='flex-1'>
                    <p className='font-mono font-medium text-xl'>{store.user.name}'s apps</p>
               </div>
               <div className='w-6 h-6 flex justify-center items-center rounded-full bg-green-300 mx-3'>
                    <p>{store.user.name.slice(0,1)}</p>
                </div>
                <div className='flex justify-center items-center px-3 py-1 border-2 mx-3'>
                    <Share style={{fontSize:'15',color:'gray'}}/>
                    <p className='ml-1 text-sm uppercase font-medium text-gray-600'>Share</p>
                </div>
                <div className='flex justify-center items-center px-3 py-1 border-2 bg-yellow-500 mr-2'>
                    <Link to='/application/edit/0' className='flex justify-center items-center'>
                        <Add style={{fontSize:'15',color:'white'}}/>
                        <p className='ml-1 text-sm uppercase font-medium text-white'>new</p>
                    </Link>
                    
                </div>
                <div className='mr-4 flex items-center'>
                    <MoreHorizRounded />
                </div>
            
           </div>
           <Apps />
           
        </div>
    )
}

export default Previewapps;
