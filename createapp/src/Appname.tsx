import React from 'react'
import { appName } from './Names'

export function Appname() {
    

    return (
        <div className='mb-6 px-3 py-2'>
            <p className='font-semibold tracking-wider font-mono lowercase'>{appName}
            <span className='text-red-500'>_</span></p>
        </div>
    )
}
