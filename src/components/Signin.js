import React, { useState, useEffect } from 'react'


function Signin() {
    const initialState = { Name: '', Email: '', Password: '' }
    const [form, setForm] = useState(initialState)
    const [error, setError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();

        setError(validation(form))
        setIsSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(error).length===0&& isSubmit){
            alert("Sign Up success")
        }
    },[error])

    function validation(value) {
        let error = {};
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!value.Name) {
            error.Name = 'Name is required'
        }
        if (!value.Email) {
            error.Email = 'Email is required'
        } else if (!regEmail.test(value.Email)) {
            error.Email = 'Invalid Email,enter correct email'
        }
        if (!value.Password) {
            error.Password = 'Password is required'
        } else if (value.Password.length < 4) {
            error.Password = 'Enter password more the 4 keywords'
        } else if (value.Password.length > 10) {
            error.Password = 'Enter password less than the 10 keywords'
        }
        return error;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <pre>{JSON.stringify(form, undefined, 2)}</pre>
            <h1>Sign In</h1>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Enter Name' value={form.Name} name='Name' onChange={handleChange} /> <br /><br />
                <p>{error.Name}</p>
                <input type='email' placeholder='Enter Email' value={form.Email} name='Email' onChange={handleChange} /><br /><br />
                <p>{error.Email}</p>
                <input type='password' placeholder='Enter Password' value={form.Password} name='Password' onChange={handleChange} /><br /><br />
                <p>{error.Password}</p>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default Signin