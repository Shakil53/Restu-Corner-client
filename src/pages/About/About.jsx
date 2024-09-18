import { FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {

    const sentMessage = () => {
        toast.success('Message Sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }
    return (
        <div>
            <Header></Header>

            <div className='px-5  md:card-body md:grid grid-cols-2 md:gap-32 items-center md:mx-58 mt-10'>
                <div className='mb-20'>
                    <h3 className='text-2xl font-bold mb-2 text-orange-500'>Delicious Restaurant</h3>
                    <h3 className='text-4xl font-extrabold mb-5'>ABOUT FOOD CORNER</h3>
                    <p className='font-semibold text-zinc-500 italic'>We believe that great food begins with the finest ingredients. Thats why we carefully select and source only the freshest and highest-quality ingredients from trusted suppliers. We prioritize sustainability and ethical practices, ensuring that our ingredients are responsibly produced and sourced.</p>
                    <button className='btn btn-wide mt-5'>VIEW MORE</button>
                </div>

                <img className='mx-auto' src="https://themes.templatescoder.com/pizzon/html/demo/1-1/images/about-pizzon.png" alt="" />

            </div>

            <div className=' px-10 mb-10 md:flex justify-center gap-52 items-center'>
                <div className='mt-24'>
                    <h2 className='text-xl font-mono font-bold text-orange-500'>Hii...!</h2>
                    <h2 className='text-2xl font-mono font-bold text-slate-500'>Anything in your mind...? </h2>

                </div>
                <div className='mt-16'>
                    <h2 className='text-center text-2xl font-bold mb-2 text-orange-500 mt-10 font-mono'>Share with us</h2>
                    <div className=''>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered input-primary w-96 mb-5" required /> <br />

                        <input type="email" name='email' placeholder="foodcorner@gmial.com" className="input input-bordered input-primary w-96 mb-5" required /><br />



                        <textarea type="text" placeholder="Message" className="textarea textarea-warning w-96 " required /> <br />

                        <button onClick={sentMessage} className="btn mt-5 md:w-full hover:bg-white hover:text-black"> Send <FaTelegramPlane className='ms-1'></FaTelegramPlane></button>

                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div >
    );
};

export default About;