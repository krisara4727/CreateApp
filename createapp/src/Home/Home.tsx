import React from 'react';
import Login from '../Authentication/Login';
import store from '../store';
import {observer} from 'mobx-react'
import { Dashboard } from './Dashboard';

function Home() {
    // let [direction, setdirection] = useState(false);
    // const person = observe(store.user, "token", (change) => {
    //     console.log(change.type, "from", change.oldValue, "to")
    //     if(change.newValue){
    //         setdirection(true);
    //     }else{
    //         setdirection(false)
    //     }
    // }) 
    // store.user.token = 'dfosijdofj';
    // setTimeout(() => {
    //     console.log('after timeout');
    //     store.user.token="";
    // },3000);
    return (
       
        <div>
            {
                store.user.token
                ? <Dashboard />
                : <Login />
            }
        </div>
    )
}

export default observer(Home);
