import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
const NewTicket = () => {
    const user = useSelector(state => state.auth);
    const [name] = useState(user.name);
    const [email] = useState(user.email);
    const[product , setProduct] = useState('iPhone');
    const [description , setDescription] = useState('');

  return (
   <>
<section className='heading'>
    <h1>Create a new ticket</h1>
    <p>Please fill out the form below</p>
</section>
<section className='form'>
    <label htmlFor='name'>Customer name</label>
    <input type="text" className = "foem-control" value = {name} disabled />
</section>
   </>
  )

}

export default NewTicket