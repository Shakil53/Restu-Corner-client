import React from 'react';
import FeedBack from '../FeedBack/FeedBack';
import Review from '../Review/Review';

const Services = () => {
    return (
        <div className='mb-24'>
            <div className=' p-5 md:grid grid-cols-3 gap-20 container mx-auto items-center text-center'>
                <div className='mb-5'>
                    <img className='w-28 h-30 mx-auto mb-5 ' src="https://cdn.pixabay.com/photo/2014/03/24/17/16/dishes-295282_1280.png" alt="" />
                    <h2 className='text-2xl font-bold mb-2 text-orange-500 '>ORDER YOUR FOOD</h2>
                    <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus quasi sint, tempore dolorem saepe eaque, perspiciatis asperiores fugiat alias tenetur provident distinctio, maxime hic neque fugit ratione. Sunt, dolores?</p>
                </div>

                <div className='mb-5'>
                    <img className='  w-28 h-30 mx-auto' src="https://www.shareicon.net/data/2016/07/15/796506_delivery_512x512.png" alt="" />
                    <h2 className='text-2xl font-bold mb-2 text-orange-500'>DELIVERY OR PICK UP</h2>
                    <p className='text-gray-500 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt est rerum totam eaque veritatis sequi impedit quaerat necessitatibus optio accusamus, nobis possimus pariatur. Perspiciatis, dolor repudiandae? Labore, facilis natus.</p>
                </div>

                <div>
                    <img className='w-28 h-30 mx-auto mb-3' src="https://cdn-icons-png.flaticon.com/512/99/99954.png" alt="" />
                    <h2 className='text-2xl font-bold mb-2 text-orange-500'>DELICIOUS RECEIPE</h2>
                    <p className='text-gray-500 font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate corporis nesciunt, repudiandae similique voluptates ab non iste, amet doloremque molestiae et inventore consequatur perferendis quae dolore fugiat, sit neque qui!</p>
                </div>

            </div>
            <Review></Review>
            <FeedBack></FeedBack>

        </div>
    );
};

export default Services;