import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CFormInput } from '@coreui/react';

const SignIn = () => {

    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function handleSubmit1(e) {
        e.preventDefault();

        if (error) {
            setError(error);
        } else {
            const signIn = {
                email1, password1,
            }
            console.log(signIn);
            navigate('/homepage', { replace: true })
        }
    }

    return (
        <>
            <section className='my-container'>
                <h2>Sign in with your email</h2>
                <p className='mb-1'>Don't have an account? &nbsp;
                    <Link to="/" className='color_5 router-link'>Sign up</Link>
                </p>
                <form className='flex flex-col justify-center' onSubmit={handleSubmit1}>
                    <CFormInput type="email" className='mb-3 p-1' id="email1"
                        floatingLabel="Email address" placeholder="augustordiaz@example.com"
                        value={email1} onChange={(e) => setEmail1(e.target.value)} />

                    <CFormInput type="password" className='mb-3 p-1' id="password1"
                        floatingLabel="Password" placeholder="Password"
                        value={password1} onChange={(e) => setPassword1(e.target.value)} />

                    <button type='submit' className='swatch_2 color_white mb-3'>Continue</button>
                </form>

            </section>
            <div className='forgot'>
                <Link to="/forgot" className='color_5 router-link'>Forgot your password?</Link>
            </div>

        </>

    )
}

export default SignIn