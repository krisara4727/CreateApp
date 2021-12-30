import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router';
import { userregister } from '../api';
import { PostMethod } from '../ApiFunctions/AllMethod';
import { allfields, passwordErr } from '../Messages';
import store, { Error } from '../store'
import { Errortoast } from '../Toast/ErrorToast';

export function Register(props:any) {
    const [name, setname] = useState<string>('');
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [confirmpassword, setconfirmpassword] = useState<string>('');
    const [errarr,seterrarr] = useState<Error[]>([]);
    const navigate = useNavigate();

    const handlechangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
    }
    const handlechangepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'password') setpassword(e.target.value);
        else if (e.target.name === 'confirmpassword') setconfirmpassword(e.target.value);
    }
    const handlechangename = (e: React.ChangeEvent<HTMLInputElement>) => {
        setname(e.target.value);
    }
    const handlesubmit = async(e: React.MouseEvent<HTMLElement>) => {
        if(email.length && password.length && name.length && confirmpassword.length){
            console.log('email and password submitted ');
            if(password === confirmpassword ){
                const datafromurl = await PostMethod(userregister,{
                    name: name,
                    email: email,
                    password: password
                })
                if(datafromurl.status === 200){
                    store.user = datafromurl.data;
                }else{
                    seterrarr([...errarr,{
                                id: new Date().getTime(),
                                msg: datafromurl.data.message,
                            }])
                }
                
                navigate('/login')
            }else{
                seterrarr([...errarr,{
                    id: new Date().getTime(),
                    msg: passwordErr,
                }])
            } 
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
        <div className='w-screen h-screen flex justify-center items-center relative'>
            <div className='border p-3 flex justify-center items-center flex-col bg-gray-200 w-full h-full md:w-1/2 md:h-1/2'>
            <div className='mb-4 w-full text-center underline text-blue-800'>
                <p className='uppercase font-mono font-bold '>Register</p>
            </div>
            <div className='w-full m-2'>
                <input type='text' value={name} name='name'
                onChange={handlechangename} className='p-2 shadow-md w-full hover:outline-2'
                placeholder='enter your name'></input>
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
            <div className='w-full m-2'>
                <input type='password' value={confirmpassword} name='confirmpassword'
                onChange={handlechangepassword} className='p-2  w-full'
                placeholder='confirm password'></input>
            </div>
            <div className='mt-4 w-full flex justify-center'>
                <button type='submit' onClick={handlesubmit}
                className='bg-green-400 hover:bg-green-600 p-2 font-semibold font-mono 
                w-1/2 text-white'>Register</button>
            </div>
            <p className='italic p-1 m-2'>Already Registered?&nbsp;&nbsp; 
            <a 
            href='/login'
            className='underline text-purple-500'
            > 
             Login then!
            </a>
            </p>
            </div>
            <Errortoast closetoast={closetoast}>
                    {errarr}
                </Errortoast>
        </div>
    )
}
