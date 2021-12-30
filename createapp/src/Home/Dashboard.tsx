import React from 'react';
import Previewapps from '../PreviewApplications/PreviewApps';
import { Sidebar } from '../Sidebar/Sidebar';


export function Dashboard() {

    return (
        <div className='flex min-w-screen min-h-screen overflow-hidden'>
            <Sidebar />
            <Previewapps />
        </div>
    )
}
