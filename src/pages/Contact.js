import React,{useState} from 'react';

const Contact = () => {
    let [input,setInput]=useState({
        fname:'',
        lname:'',
        email:''
    })
    let inputEvent=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    let handlesub=(e)=>{
        e.preventDefault();
        setInput({fname:"",lname:"",email:""})
    }
  return (
    <>
     <form onSubmit={handlesub}>
        <label>First Name</label>
        <input type='text' placeholder='Enter your First Name' name='fname' onChange={inputEvent} value={input.fname} /><br />
        <label>Last Name</label>
        <input type='text' placeholder='Enter your Last Name' name='lname' onChange={inputEvent} value={input.lname} /><br />
        <label>Email</label>
        <input type='text' placeholder='Enter your Email' name='email' onChange={inputEvent} value={input.email} /><br />
        <button type='submit'>Submit</button>
        </form> 
    </>
  );
}

export default Contact;
