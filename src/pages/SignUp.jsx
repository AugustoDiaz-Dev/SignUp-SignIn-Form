import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CFormInput, CFormCheck } from '@coreui/react';

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(true);

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (error) {
            setError(error);
        } else {
            const signUp = {
                firstName, lastName, email, password, checkbox,
            }
            console.log(signUp);
            navigate('/signin', { replace: true })
        }
    }

    return (
        <section className='my-container'>
            <h2>Sign up with your email</h2>
            <p className='mb-3'>Already have an account? &nbsp;
                <Link to="/signin" className='color_5 router-link'>Sign in</Link>
            </p>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>

                <CFormInput type="text" className='mb-3 p-1' id="firstName"
                    floatingLabel="First name" placeholder="Augusto"
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <CFormInput type="text" className='mb-3 p-1' id="lastName"
                    floatingLabel="Last name" placeholder="Diaz"
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <CFormInput type="email" className='mb-3 p-1' id="email"
                    floatingLabel="Email address" placeholder="augustordiaz@example.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <CFormInput type="password" className='form-control mb-3 p-1' id="password"
                    floatingLabel="Password" placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="" className='mb-3'>
                    <CFormCheck id="checkbox" className='mb-3'
                        value={checkbox} onChange={(e) => setCheckbox(e.target.value)} /> &nbsp; I agree to the&nbsp;
                    <Link to="/terms" className='color_5 router-link'> Terms of Service </Link>
                    and&nbsp;
                    <Link to="/privacy" className='color_5 router-link'> Privacy Policy </Link>
                </label>

                <button type='submit' className='swatch_5 color_white mb-3'>Create account</button>
            </form>

            {/* Form Output */}
            {/* <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{checkbox}</p>
            {console.log(`${firstName}, ${lastName}, ${email}, ${password}, ${checkbox}`)} */}
        </section>
    )
}

export default SignUp

