import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>


            <div className="navbar bg-base-200 md:px-20">
                <div className="navbar-start  mx-auto">
                    <div className="dropdown">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/"><a>Home</a></Link>
                                <Link to="/about" tabIndex={0}>

                                    About



                                </Link>
                                <Link to="/blog">Blog</Link>
                            </ul>
                        </div>
                    </div>
                    <a className="btn btn-ghost normal-case md:text-3xl font-extrabold font-mono">Food Corner</a>
                </div>
                <div className="navbar-center hidden lg:flex items-center gap-24">

                    {/* <NavLink to='/' className={({ isActive }) => (isActive ? "text-red-500" : "")}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? "underline" : "")}> Blog</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "" : "")}>About</NavLink> */}

                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : " ")}><span className='font-bold'>Home</span></NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-red-600' : " ")}><span className='font-bold'>About</span></NavLink>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-red-600 " : "")}><span className='font-bold '>Blog</span></NavLink>


                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-5'>
                        {user &&
                            <div className="tooltip  tooltip-left mt-3" data-tip={user.displayName}>
                                <button>  <img className='h-12 w-12' src={user?.photoURL} alt="" /> </button>
                            </div>
                        }


                        {user ?
                            <button onClick={handleLogout} className="btn">LogOut</button> :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>

                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;