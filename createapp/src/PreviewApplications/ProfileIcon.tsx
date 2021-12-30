import { Edit, ExitToApp } from '@material-ui/icons';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import store from '../store'

function Profileicon() {
    const [show, setshow] = useState<boolean>(false);
    const navigate = useNavigate();
    const [appFirstLetter, setappFirstLetter] = useState<string>('')
    useEffect(() => {
        setappFirstLetter(store.user.name.slice(0, 1));
    },[])

    const handleEditProfile = (e: React.MouseEvent<HTMLLIElement>) => {

    }
    const handleSignOut = (e: React.MouseEvent<HTMLLIElement>) => {
        store.user = {
            _id: '',
            name:'',
            email:'',
            token:'',
        } ;
        navigate('/login')
    }

    return (
        <>
            <div className='w-6 h-6 flex justify-center items-center rounded-full bg-green-300 mx-3 cursor-pointer'
            onClick={() => setshow(!show)}
            >
                <p className='text-xs'>{appFirstLetter}</p>
            </div>
            { show && (
                <ul className='min-w-52 w-max bg-white p-2 absolute top-10 right-4 text-gray-500 border rounded-md'>
                    <li className='flex px-2 py-1 mb-2 border-b cursor-pointer hover:bg-purple-100'>
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-purple-300 text-black mr-2'>
                            {appFirstLetter}
                        </div>
                        <div className='text-gray-700'>
                            {store.user.email}
                        </div>
                    </li>
                    <li className="px-2 py-1 flex mb-2 items-center cursor-pointer hover:bg-purple-100" 
                    onClick={handleEditProfile}
                    >
                        <Edit style={{fontSize:'20',marginRight:'.5rem'}}/>
                        <div className="capitalize text-gray-700 text-sm">
                            Edit Profile
                        </div>
                    </li>
                    <li className="px-2 py-1 flex items-center mb-2 cursor-pointer hover:bg-purple-100"
                    onClick={handleSignOut}
                    >
                        <ExitToApp style={{fontSize:'20',marginRight:'.5rem'}} />
                        <div className="capitalize text-gray-700 text-sm">
                            sign out
                        </div>
                    </li>
                </ul>
            )}
            
        </>
    )
}


export default observer(Profileicon);