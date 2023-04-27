import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {signIn} =useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
        form.reset()
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
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