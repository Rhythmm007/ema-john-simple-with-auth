import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                </div>
                <button className='btn-submit' type='submit' value='login'>Login</button>
            </form>
            <p><small>Already Have an Account? <span><Link to="/signUp">Create New Accoutn</Link></span></small></p>
        </div>
    );
};

export default Login;