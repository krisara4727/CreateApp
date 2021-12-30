import { toJS } from 'mobx';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { allfields } from '../Messages';
import store, { Error } from '../store'
import { Errortoast } from '../Toast/ErrorToast';
import { userlogin } from '../api';
import { PostMethod } from '../ApiFunctions/AllMethod';

function Login(props:any) {
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [errarr,seterrarr] = useState<Error[]>([]);
    const navigate = useNavigate();
    const handlechangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
    }
    const handlechangepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setpassword(e.target.value);
    }
    const handlesubmit = async(e: React.MouseEvent<HTMLElement>) => {
        if(email.length && password.length){
            console.log('email and password submitted ');

            const datafromurl = await PostMethod(userlogin,{
                email: email,
                password: password
            });
            
            if(datafromurl.status === 200){
                store.user = datafromurl.data;
                navigate('/');
            }else{
                seterrarr([...errarr,{
                            id: new Date().getTime(),
                            msg: datafromurl.data.message,
                        }])
            }
           
            
            console.log('data from the store ',toJS(store),datafromurl)
            
            
        }else{
            seterrarr([...errarr,{
                id: new Date().getTime(),
                msg: allfields,
            }])
        }
    }
    const closetoast = (e: React.MouseEvent<HTMLElement>, ids: number) => {
        seterrarr(errarr.filter(item => item.id !== ids))
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center '>
            <div className='border p-3 flex justify-center items-center flex-col bg-gray-200 w-full h-full md:w-1/2 md:h-1/2'>
                <div className='mb-4 w-full text-center underline text-blue-800'>
                    <p className='uppercase font-mono font-bold '>login</p>
                </div>
            <div className='w-full m-2'>
                <input type='text' value={email} name='email'
                onChange={handlechangeemail} className='p-2 shadow-md w-full hover:outline-2'
                placeholder='enter your email'></input>
            </div>
            <div className='w-full m-2'>
                <input type='password' value={password} name='password'
                onChange={handlechangepassword} className='p-2  w-full'
                placeholder='enter your password'></input>
            </div>
            <div className='mt-4 w-full flex justify-center'>
                <button type='submit' onClick={handlesubmit}
                className='bg-green-400 hover:bg-green-600 p-2 font-semibold font-mono 
                w-1/2 text-white'>Login</button>
            </div>
            <p className='italic p-1 m-2'>Not Registered yet?&nbsp;&nbsp; 
            <a 
            href='/register'
            className='underline text-purple-500'
            > 
             Register now!
            </a>
            </p>
            </div>
            
                <Errortoast closetoast={closetoast}>
                    {errarr}
                </Errortoast>
           
        </div>
    )
}
export default (Login)




