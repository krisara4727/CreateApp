import React from 'react'
import Login from '../Authentication/Login'
import store from '../store'
import { Editbodyleft } from './EditbodyLeft'
import Editbodymiddle from './EditbodyMiddle'
import Editbodyright from './EditbodyRight'
import Editheader from './Editheader'

export function Editapp() {
    

    return (
        <div className='w-screen h-screen flex flex-col overflow-hidden'>
            {store.user.token ? (
                <>
            <Editheader />
            <div className='w-full h-full flex flex-1 flex-grow'>
                <Editbodyleft />
                <Editbodymiddle />
                <Editbodyright />
            </div>
                </>
                ): (
                    <Login />
                )}
            
        </div>
    )
}
