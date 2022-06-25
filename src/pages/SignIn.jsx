import React from 'react'
import { Link } from "react-router-dom";
import { CFormInput } from '@coreui/react';

const SignIn = () => {
    return (
        <>
            <section className='my-container'>
                <h2>Sign in with your email</h2>
                <p className='mb-1'>Don't have an account? &nbsp;
                    <Link to="/" className='color_5 router-link'>Sign up</Link>
                </p>
                <form className='flex flex-col justify-center'>
                    <CFormInput type="email" className='mb-3 p-1' id="email" floatingLabel="Email address" placeholder="augustordiaz@example.com" />

                    <CFormInput type="password" className='mb-3 p-1' id="password" floatingLabel="Password" placeholder="Password" />
                </form>

                <button className='swatch_2 color_white mb-3'>Continue</button>
            </section>
            <div className='forgot'>
                <Link to="/forgot" className='color_5 router-link'>Forgot your password?</Link>
            </div>

        </>

    )
}

export default SignIn