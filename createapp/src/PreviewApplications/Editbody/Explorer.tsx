import { Add, KeyboardArrowDown, NoteAdd, Settings } from '@material-ui/icons'
import { observer } from 'mobx-react'
import React from 'react'
import { Pages } from './Pages'

function Explorer() {
    

    return (
        <div className='w-full'>
            <div className='flex items-center hover:bg-gray-200 p-1'>
                <KeyboardArrowDown style={{fontSize:'20',color:'gray'}} />
                <NoteAdd style={{fontSize:'20',marginRight:'4px'}}/>
                <p className='flex-1 capitalize'>pages</p>
                <Settings style={{fontSize:'15',color:'gray'}} className='mr-2'/>
                <Add style={{fontSize:'15',color:'gray'}} className='mr-2' />
            </div>
            <Pages />
        </div>
    )
}

export default observer(Explorer)