import React from 'react'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import { toast } from 'react-toastify';
import {useDispatch , useSelector} from 'react-redux';
import { register , reset } from '../features/auth/auth-slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Register = () => {
const dispatch = useDispatch();

const {user , isLoading , isSuccess , message , isError} = useSelector(state => state.auth);
const navigate = useNavigate();
    const [formData , setFormData] = useState({
        name : '',
        email : '',
        password : '',
        password2 : ''
    });
 const {name , email , password , password2} = formData;

 // useEffect() every time the dependency changes

 useEffect(() => {

    if(isError) {
        toast.error(message);
    }
    if(isSuccess || user) {
        //navigate to the home page
        navigate('/');

        //reset to the default
        dispatch(reset());

    }

 } , [message , user , navigate , dispatch , isError , isSuccess ]);

 const onChange = (e) => {
     setFormData((prevData) => ({
         ...prevData,
         [e.target.name]: e.target.value
     }))
  
 }

 //Submit the form
 const onSubmit = (e) =>{
     e.preventDefault();
     if(password !== password2){
         toast.error('Passwords do not match');
     }else {
         const userData = {
          name,
          email,
          password,
          password2

         }
         dispatch(register(userData));
         
     }
    
 }

 //Show the spinner while loading

 if(isLoading) {
     return <Spinner />
 }
  return (
      <>
   <section className='heading'>
       <h1><FaUser /> Register</h1>
       <p>Please create an account</p>
       </section>
       <section className='form'>
           <form onSubmit = {onSubmit} >
             <div class="form-group">
                  <input type="text" className="form-control"  name="name"  required placeholder="Enter your name" value={name} onChange = {onChange} />                                                       
                </div>                           
                 
             <div class="form-group">
                  <input type="email" className="form-control"  name="email"  required placeholder="Enter your email" value={email} onChange = {onChange} />                                                       
                </div>                           
                 
             <div class="form-group">
                  <input type="password" className="form-control"  name="password" required  placeholder="Enter your password" value={password} onChange = {onChange} />                                                       
                </div>                           
                 
             <div class="form-group">
                  <input type="password" className="form-control"  name="password2" required  placeholder="Enter your password2" value={password2} onChange = {onChange} />                                                       
                </div>                           
                 <button className='btn btn btn-block'>Submit</button>
           </form>
       </section>
       </>
  )
}

export default Register