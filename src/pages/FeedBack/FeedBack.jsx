import React from 'react';
import { MdPermPhoneMsg } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const FeedBack = () => {

    const bookingClick = () => {
        toast.success('Successfully Booked', {
            position: "top-center",
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

        <div className='mt-24'>

            <div className='md:flex justify-around items-start mx-auto '>

                <div className='md:w-2/4 p'>
                    <div className='px-2 text-center md:text-start'>
                        <h3 className=' text-2xl font-bold  text-orange-400 mb-2'>Fresh from pizzon</h3>
                        <h1 className='  text-4xl md:text-5xl font-bold mb-5'>BOOK ONLINE</h1>
                        <p className="" >Fugit,
                            optio quas aliquid illo totam iusto laborum repellendus rerum  explicabo.  Similique corporis repudiandae velit sapiente sunt sequi,  accusantium fugiat eveniet corrupti.  Veritatis ipsa molestiae quae voluptates assumenda soluta, error quas doloremque incidunt.</p>
                    </div>
                    <div className='mx-auto md:mx-0 mt-5 mb-10 w-4/5 md:w-2/4 
                    md:bg-orange-500 hover:bg-green-500 md:p-2  rounded' >
                        <div className='flex items-center  gap-5 bg-black p-3  rounded w-full '>
                            <MdPermPhoneMsg className='text-2xl mt-2 ms-14 text-center text-white '></MdPermPhoneMsg><h2 className='text-2xl text-white font-bold'>+8801445304257</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-4xl text-center mb-5 font-bold  text-orange-500 md:mt-0 mt-20'>BOOK A TABLE</h3>

                    <div className='mx-auto'>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered mx-14 md:mx-0 input-primary w-96 mb-5" required /> <br />

                        <input type="email" name='email' placeholder="foodcorner@gmial.com" className="input input-bordered input-primary mx-14 md:mx-0  w-96 mb-5" required /><br />



                        <input type="date" placeholder="Date" className="input input-bordered input-primary w-96 mx-14 md:mx-0  " required /> <br />

                        <button onClick={bookingClick} className="btn mt-5 btn-wide md:w-full hover:bg-white mx-14 md:mx-0  hover:text-black">Book Now</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeedBack;