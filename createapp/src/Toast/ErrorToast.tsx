import React from 'react'
import { Error } from '../store'

export function Errortoast(props:any) {

    return (
        <>
        <ul className='absolute top-10 right-2'>
        {// eslint-disable-next-line no-sequences
            props.children && props.children.map((item:Error) => (
                <li key={item.id} className={`flex 
                bg-pink-300 text-red-600 mb-2`}>
                    <p className='mr-3 p-1 flex-1'>
                        {item.msg}
                    </p>
                    <button onClick={(e) => props.closetoast(e,item.id)} className='bg-green-400 text-white px-2'>
                        X
                    </button>
                </li>
            ))
        }
        </ul>
    
    </>
    )
}
