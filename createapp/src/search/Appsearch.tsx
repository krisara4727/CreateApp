import { NotificationImportantOutlined, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import Profileicon from '../PreviewApplications/ProfileIcon'

export function Appsearch() {
    

    return (
        <div className='w-full flex mb-6'>
           <div className='flex-1 bg-white ml-3'>
               <div className='flex hover:bg-gray-100 max-w-max items-center px-2 py-1'>
                    <SearchOutlined style={{fontSize:'20',color:'gray'}} />
                    <input type='text' placeholder='Search for apps...'
                    className='p-1 ml-1 hover:bg-gray-100 focus:outline-none text-sm'
                    ></input> 
               </div>
                               
           </div>
           <div className='flex items-center'>
                <NotificationImportantOutlined style={{fontSize:'25',color:'gray mx-3'}} />
                <Profileicon />
           </div>
        </div>
    )
}
