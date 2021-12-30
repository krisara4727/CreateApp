import { Backup, BarChart, CheckBox, CheckBoxOutlineBlankOutlined, Crop169, Crop75Outlined, DateRangeOutlined, Gamepad, GraphicEq, Image, List, ListAlt, MoreVert, OndemandVideo, PictureAsPdf, Remove, SearchOutlined, StarRate, TableChart, TextFields, ToggleOn } from '@material-ui/icons'
import React from 'react'
import { widgetmsg } from '../../Messages'
import { hmtltagSelectFile, htmltagAudio, htmltagButton, htmltagChart, htmltagCheckbox, htmltagContainer, htmltagDate, htmltagDivider, htmltagImage, htmltagInput, htmltagText, htmltagVideo } from '../../Names'
// import { DragEvent } from '../../store';

export function Widgets() {
    
    const ondragstart = (e: any,tag: string) => {
        // let innertext = e.target.innerText.replace(/[^a-z]/gi, '');
        let dragobject = JSON.stringify({'type':tag,'freshness':'new','id':0})
        e.dataTransfer.setData('dragobject',dragobject)
    }


    return (
        <div className='w-full'>
            <div className='flex bg-gray-100 p-2 items-center border-b border-red-500'>
                <SearchOutlined style={{fontSize:'20',color:'gray'}} />
                <input placeholder='Search Widgets' name='search' type='text' 
                className='text-sm ml-2 bg-gray-100 focus:outline-none'
                />
            </div>
            <div className='p-3'>
                <p className='text-gray-500 text-sm font-light mb-2'>{widgetmsg}</p>
                <div className='grid grid-cols-3 gap-7 p-2 justify-items-start overflow-y-scroll scrollbar-hide'>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagAudio)}>
                        <GraphicEq style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>audio</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagButton)}>
                        <Crop169 style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Button</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagCheckbox)}>
                        <CheckBox style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>checkbox</p>
                    </div>
                    
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagChart)}>
                        <BarChart style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>chart</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagContainer)}>
                        <CheckBoxOutlineBlankOutlined style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light '>container</p>
                    </div>
                    
                    <div className='auto-cols-fr flex justify-center flex-col' draggable>
                        <PictureAsPdf style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Document</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagDivider)} >
                        <Remove style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Divider</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <ListAlt style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Form</p>
                    </div>
                    <div className='auto-cols-fr ' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagInput)}>
                        <Crop75Outlined style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>input</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <List style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'> list</p>
                    </div>
                    <div className='auto-cols-fr ' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagText)}>
                        <TextFields style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Text</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <StarRate style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>rating</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <TableChart style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>table</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <ToggleOn style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>switch</p>
                    </div>
                    <div className='auto-cols-fr ' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagVideo)} >
                        <OndemandVideo style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>video</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <MoreVert style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>menu button</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,hmtltagSelectFile)}>
                        <Backup style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>File picker</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagDate)}>
                        <DateRangeOutlined style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Date picker</p>
                    </div>
                    <div className='auto-cols-fr flex justify-center flex-col' 
                    draggable onDragStart={(e: React.MouseEvent) => ondragstart(e,htmltagImage)}>
                        <Image style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Image</p>
                    </div>
                    <div className='auto-cols-fr ' draggable>
                        <Gamepad style={{fontSize:'30'}} className='text-gray-700' />
                        <p className='uppercase text-vs font-light'>Button group</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
