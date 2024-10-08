import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { createUser, updateProfilePic } = useContext(AuthContext);
    const from = location.state?.form?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        const name = form.displayName.value;

        setError('');

        //here password validation
        if (password !== confirm) {
            //match na hle error dewa uchit. r error dite hle state declare korte hoy.
            setError('Password not matched')
            return;

        }
        else if (password.length < 6) {
            setError('Password should be atleast 6 characters')
            return;

        }

        createUser(email, password)
            .then((result) => {
                updateProfilePic(name, photo)
                    .then(folafol => {
                        console.log(folafol);
                        const loggesUser = result.user;
                        console.log(loggesUser);
                        form.reset();
                        navigate(from, { replace: true })

                    })



            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className=' p-10 mt-5 md:w-2/5 md:mb-96 md:mt-28 mx-auto
        '>
            <div className='form-container'>
                <h2 className='form-titile text-3xl font-bold font-mono mb-10 text-center'>Sign Up </h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Email</label>
                        <input type="text" name='email' placeholder="Enter email" className="input input-bordered input-primary w-full  mb-5" required />
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Photo URL</label>
                        <input type="text" name='photo' placeholder="Your URL" className="input input-bordered input-primary w-full  mb-5" required />

                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Name</label>
                        <input type="text" name='displayName' placeholder="Your Name" className="input input-bordered input-primary w-full  mb-5" required />
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter email" name='password' className="input input-bordered input-primary w-full mb-5" required />

                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="confirm">Confirm Password</label>
                        <input type="password" placeholder="Enter email" name='confirm' className="input input-bordered input-primary w-full  mb-5" required />

                        {/* <input className='signup-btn'>Log In</input> */}

                        <input className='btn  w-full' type="submit" value="Register" />

                        <p className='sub-title sub-title mt-4 font-bold text-gray-500'>Already have an account? <Link className='link' to="/login"><span className='text-primary '>Login</span></Link></p>

                        <p className='text-error'>{error}</p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;