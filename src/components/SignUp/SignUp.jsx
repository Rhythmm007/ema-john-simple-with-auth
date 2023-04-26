import { Link } from 'react-router-dom';
import './SignUp.css'
import React, { useState } from 'react';

const SignUp = () => {

    const [error, setError] = useState('')

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        setError('')
        
        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Your password is too short')
            return
        }

        form.reset()
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required/>
                </div>
                
                <p className='text-warning'>{error}</p>
                
                <button className='btn-submit' type='submit' value='signUp'>Sign Up</button>
            </form>
            <p><small>Already Have an Account? <span><Link to="/login">Login</Link></span></small></p>
        </div>
    );
};

export default SignUp;