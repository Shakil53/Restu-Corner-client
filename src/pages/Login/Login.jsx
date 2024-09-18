import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const { singIn, setUser, GoogleLogin, GithubLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.form?.pathname || '/';

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => navigate(from, {
                replace: true
            }))
            .catch(error => console.log(error.message))
    }

    const handleGithubLogin = () => {
        GithubLogin()
            .then(result => navigate(from, {
                replace: true
            }))
            .catch(error => console.log(error.message))
    }

    const handleLogIn = event => {
        //reload problem solver jonno
        event.preventDefault();



        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);




        singIn(email, password)
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);

                setUser(loggesUser);


                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError("Incorrect Password");
            })
    }
    return (
        <div className=' p-10 mt-16 md:w-2/5 md:mb-96 md:mt-40 mx-auto
        '>
            <h3 className='text-3xl font-bold font-mono mb-10 text-center'>Please Login</h3>

            <form onSubmit={handleLogIn} >
                <div className="form-control container ">
                    <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Email</label>
                    <input type="text" name='email' placeholder="Enter email" className="input input-bordered input-primary w-full  mb-5" />
                    <label className='font-mono text-xl mb-2 w-1/2' htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} placeholder="Enter password" name='password' className="input input-bordered input-primary w-full  " />
                    <p className='mb-5 text-slate-500' onClick={() => setShow(!show)} >
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>

                            }
                        </small>
                    </p>



                    <input className='btn btn-wide-full ' type="submit" value="Log In" />
                    <p className='text-red-500'>{error}</p>
                    <p className='sub-title mt-4 font-bold text-gray-500'>
                        New to Food-Corner? <Link className='link' to="/register"><span className='text-primary '>Create New Account</span></Link>

                    </p>
                </div>
            </form>
            <div className='text-center mb-10'>
                <p className='pb-5 mt-10 font-bold font-mono text-xl text-green-600'>SignUp using</p>
                <div className='flex gap-4 justify-center'>
                    <button onClick={() => handleGoogleLogin()} className='text-2xl'><FaGoogle></FaGoogle> </button>
                    <button onClick={() => handleGithubLogin()} className='text-2xl'><FaGithub></FaGithub></button>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};


export default Login;