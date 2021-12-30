import React, { useState } from 'react';
import Explorer from './Editbody/Explorer';
import { Widgets } from './Editbody/Widgets';

export function Editbodyleft() {
    const [widgets, setwidgets] = useState(false);
    

    return (
        <div className='w-250 min-w-250  border-r'>
            <div className='w-full'>
                <div className='p-3'>
                    <div className='uppercase font-medium text-sm mt-1 mb-3 '>navigation</div>
                    <div className='flex w-full bg-gray-200 p-1 mb-2'>
                        <button className={`flex-1 capitalize ${!widgets && 'bg-white'}`}
                        onClick={(e: React.MouseEvent) => setwidgets(false)}
                        >
                            Explorer
                        </button>
                        <button className={`flex-1 capitalize ${widgets && 'bg-white'}`}
                        onClick={(e: React.MouseEvent) => setwidgets(true)}
                        >
                            Widgets
                        </button>
                    </div>
                </div>
                
                <div className='flex'>
                    {
                        !widgets ? (
                            <Explorer />
                        ) : (
                            <Widgets />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
