import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import img from '../assets/login.jpeg'
import './Login.css'

export default function Login({ onClose }) {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (isSignup) {
            // ----- SIGNUP -----
            const existingUser = users.find((u) => u.email === data.email);
            if (existingUser) {
                setError('email', {
                    type: 'manual',
                    message: 'An account with this email already exists',
                });
                return;
            }

            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
            };

            const updatedUsers = [...users, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            window.dispatchEvent(new Event('authChange'));
            reset();
            navigate('/');
        } else {
            // ----- LOGIN -----
            const matchedUser = users.find(
                (u) => u.email === data.email && u.password === data.password
            );

            if (!matchedUser) {
                setError('password', {
                    type: 'manual',
                    message: 'Invalid email or password',
                });
                return;
            }

            localStorage.setItem('currentUser', JSON.stringify(matchedUser));
            window.dispatchEvent(new Event('authChange'));
            reset();
            navigate('/');
            onClose?.();
        }
    };

    const toggleMode = () => {
        setIsSignup((prev) => !prev);
        reset();
    };

    return (
        <div className='login-model-wrapper'>
            <div className='login-img-wrapper'>
                <img src={img} alt='Login Img' className='login-main-img' />
            </div>
            <div className='login-form-section'>
                <div className='login-header'>
                    <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
                    <RxCross2 className='login-cross-icon' onClick={onClose} />
                </div>

                <form className='form-section' onSubmit={handleSubmit(onSubmit)}>
                    <p className='form-info'>
                        {isSignup
                            ? 'Create an account to get started.'
                            : 'Enter your mail to log in.'}
                    </p>

                    {isSignup && (
                        <>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                className='email-input'
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && (
                                <span className='form-error'>{errors.name.message}</span>
                            )}
                        </>
                    )}

                    <input
                        type='text'
                        placeholder='Enter your email'
                        className='email-input'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email',
                            },
                        })}
                    />
                    {errors.email && (
                        <span className='form-error'>{errors.email.message}</span>
                    )}

                    <input
                        type='password'
                        placeholder='Enter your password'
                        className='password-feild'
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                    />
                    {errors.password && (
                        <span className='form-error'>{errors.password.message}</span>
                    )}

                    <button type='submit' className='login-button'>
                        {isSignup ? 'Sign Up' : 'Continue'}
                    </button>
                </form>

                <p className='toggle-auth-mode'>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span onClick={toggleMode} className='toggle-auth-link'>
                        {isSignup ? 'Login' : 'Sign Up'}
                    </span>
                </p>

                <hr />

                <p className='login-terms'>
                    By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                </p>

                <div className='other-options'>
                    <button type='button' className='google-btn'>
                        <FaGoogle />
                        Continue with Google
                    </button>

                    <button type='button' className='fackbook-btn'>
                        <FaFacebookF />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}