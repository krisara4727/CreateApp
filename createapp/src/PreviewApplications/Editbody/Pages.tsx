import React, { useState } from 'react'
import { Add, Apps, Home, KeyboardArrowDown } from '@material-ui/icons'
import { Transition } from '@tailwindui/react';

export function Pages() {
    const [showwidgets, setshowwidgets] = useState<boolean>(true);

    return (
        <div>
            <div className='flex items-center p-1 ml-1'>
                <KeyboardArrowDown style={{fontSize:'20',color:'gray'}} 
                onClick={(e: React.MouseEvent) => setshowwidgets(!showwidgets)}
                />
                    <Home style={{fontSize:'15',marginRight:'4px',color:'green'}}/>
                    <p className='flex-1 capitalize'>page1</p>
                
            </div>
            <Transition 
                show={showwidgets}
                enter="transition-opacity duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                        <div className={`items-center hover:bg-gray-200 p-1 ml-2 flex transition-all
                        duration-300 `}>
                            <KeyboardArrowDown style={{fontSize:'20',color:'gray'}} />
                            <Apps style={{fontSize:'20',marginRight:'4px'}}/>
                            <p className='flex-1 capitalize'>Widgets</p>
                            <Add style={{fontSize:'15',color:'gray'}} className='mr-2' />
                        </div>
                </Transition>      
        </div>
        
    )
}
