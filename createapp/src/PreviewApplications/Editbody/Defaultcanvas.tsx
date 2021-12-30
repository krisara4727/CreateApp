import {DesktopMac, OpenInNew, PhoneAndroid, TabletAndroid, TabletMac } from '@material-ui/icons'
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import store from '../../store';

function Defaultcanvas() {
    const [canvassize, setcanvassize] = useState<string>('')

    const handleClicks = (e: React.MouseEvent, type:string) => {
        if (store.canvasprevioustype) {
            const divi = document.getElementById(store.canvasprevioustype);
            if(divi) divi.style.backgroundColor = '#e5e7eb';
        }
            const division = document.getElementById(type)
            if(division) division.style.backgroundColor = "white";
            store.canvasprevioustype = type;
    }

    function CanvasSizes(props: { name: string  }){
        return (
            <div className='absolute -bottom-8 text-vs w-max px-2 py-1 bg-black text-white text-center capitalize'>
                {props.name}
            </div>
        )
    }

    return (
        <div>
            <div className='uppercase font-medium text-sm mb-4'>Properties</div>
            <p className='capitalize text-gray-500 font-light mb-1'>Canvas size</p>
            <div className='w-full flex items-center bg-gray-200 justify-between p-1'>
                <div className='bg-white hover:bg-white p-1 flex-1 text-center relative' id='fullscreen'
                onMouseEnter={() => setcanvassize('full screen')}
                onMouseLeave={() => setcanvassize('')}
                onClick={(e) => handleClicks(e,'fullscreen')}
                >
                    <OpenInNew style={{fontSize:'15'}}   />
                    {canvassize === 'full screen' && <CanvasSizes name={canvassize} />}
                </div>
                <div className='hover:bg-white p-1 flex-1 text-center relative' id='desktop'
                onMouseEnter={() => setcanvassize('desktop')}
                onMouseLeave={() => setcanvassize('')}
                onClick={(e) => {
                    handleClicks(e,'desktop')
                    store.canvasSize = 1160}
                }
                >
                    <DesktopMac style={{fontSize:'15'}}   />
                    {canvassize==='desktop' && <CanvasSizes name={canvassize} />}
                </div>
                <div className='hover:bg-white p-1 flex-1 text-center relative' id='largetablet'
                onMouseEnter={() => setcanvassize('large tablet')}
                onMouseLeave={() => setcanvassize('')}
                onClick={(e) => {
                    handleClicks(e,'largetablet')
                    store.canvasSize = 960}
                }
                >
                    <TabletAndroid style={{fontSize:'15'}}   />
                    {canvassize === 'large tablet' && <CanvasSizes name={canvassize} />}
                </div>
                <div className='hover:bg-white p-1 flex-1 text-center relative' id='tablet'
                onMouseEnter={() => setcanvassize('tablet')}
                onMouseLeave={() => setcanvassize('')}
                onClick={(e) => {
                    handleClicks(e,'tablet')
                    store.canvasSize = 650}
                }
                >
                    <TabletMac style={{fontSize:'15'}}   />
                    {canvassize === 'tablet' && <CanvasSizes name={canvassize} />}
                </div>
                <div className='hover:bg-white p-1 flex-1 text-center relative' id='mobile'
                onMouseEnter={() => setcanvassize('mobile')}
                onMouseLeave={() => setcanvassize('')}
                onClick={(e) => {
                    handleClicks(e,'mobile')
                    store.canvasSize = 336}
                }
                >
                    <PhoneAndroid style={{fontSize:'15'}}   />
                    {canvassize === 'mobile' && <CanvasSizes name={canvassize} />}
                </div>

            </div>
        </div>
    )
}
export default observer(Defaultcanvas)