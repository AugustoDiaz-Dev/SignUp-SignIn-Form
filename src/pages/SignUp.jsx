import React from 'react'
import { Link } from "react-router-dom";
import { CFormInput, CFormCheck } from '@coreui/react';

const SignUp = () => {
    return (
        <section className='my-container'>
            <h2>Sign up with your email</h2>
            <p className='mb-3'>Already have an account? &nbsp;
                <Link to="/signin" className='color_5 router-link'>Sign in</Link>
            </p>
            <form className='flex flex-col justify-center'>

                <CFormInput type="text" className='mb-3 p-1' id="firstName" floatingLabel="First name" placeholder="Augusto" />

                <CFormInput type="text" className='mb-3 p-1' id="lastName" floatingLabel="Last name" placeholder="Diaz" />

                <CFormInput type="email" className='mb-3 p-1' id="email" floatingLabel="Email address" placeholder="augustordiaz@example.com" />

                <CFormInput type="password" className='mb-3 p-1' id="password" floatingLabel="Password" placeholder="Password" />

                <label htmlFor="" className='mb-3'>
                    <CFormCheck id="checkbox" className='mb-3' /> &nbsp; I agree to the&nbsp;
                    <Link to="/terms" className='color_5 router-link'> Terms of Service </Link>
                    and&nbsp;
                    <Link to="/privacy" className='color_5 router-link'> Privacy Policy </Link>
                </label>
            </form>

            <button className='swatch_5 color_white mb-3'>Create account</button>


        </section>
    )
}

export default SignUp