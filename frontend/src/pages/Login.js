import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch , useSelector } from 'react-redux';
import { login , reset } from '../features/auth/auth-slice';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const {user , isLoading , isSuccess , isError , message} = useSelector(state => state.auth);

    const [formData , setFormData] = useState({
                                            
        email : '',
        password : '',
    
    });
 const {email , password } = formData;

useEffect(() => {

    if(isError) {
        toast.error(message);
    }
    if(isSuccess || user) {
        navigate('/');
    }
    dispatch(reset());
},[isError, isSuccess, user, message, navigate, dispatch])


 const onChange = (e) => {
     setFormData((prevData) => ({
         ...prevData,
         [e.target.name]: e.target.value
     }))
  
 }

 //Submit the form
 const onSubmit = (e) =>{
     e.preventDefault();
    const userData = {
        email ,
        password
    }
    dispatch(login(userData));
    
 }
  return (
      <>
   <section className='heading'>
       <h1><FaSignInAlt /> Login</h1>
       <p>Please enter your details</p>
       </section>
       <section className='form'>
           <form onSubmit = {onSubmit} >
                                              
             <div class="form-group">
                  <input type="email" className="form-control"  name="email"  required placeholder="Enter your email" value={email} onChange = {onChange} />                                                       
                </div>                           
                 
             <div class="form-group">
                  <input type="password" className="form-control"  name="password" required  placeholder="Enter your password" value={password} onChange = {onChange} />                                                       
                </div>                           
                 
                                   
                 <button className='btn btn btn-block'>Submit</button>
           </form>
       </section>
       </>
  )
}

export default Login