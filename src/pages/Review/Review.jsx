
const Review = () => {
    return (
        <div>
            <div className='text-center mt-32 mb-16 '>
                <h3 className='text-2xl font-semibold text-gray-500'>What Say Our Clients</h3>
                <h2 className='text-4xl mt-3 mb-5 font-bold text-amber-500'>CUSTOMER REVIEWS</h2>
            </div>

            <div className='md:grid grid-cols-3 items-center container gap-5 mx-auto'>
                <div className=' card-body'>
                    <div className='flex items-start gap-5 mb-3'>
                        <img className=' w-12  md:h-20 md:w-20 rounded-full' src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <h2 className='text-2xl font-semibold text-orange-500'>Ezabella Luba</h2>
                    </div>
                    <p className='text-gray-500 italic'>Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.</p>
                </div>
                <div className=' card-body'>
                    <div className='flex items-start gap-5 mb-3'>
                        <img className=' w-12  md:h-20 md:w-20 rounded-full' src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <h2 className='text-2xl font-semibold text-orange-500'>Ellisa Perry</h2>
                    </div>
                    <p className='text-gray-500 italic'>Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.</p>
                </div>
                <div className=' card-body'>
                    <div className='flex items-start gap-5 mb-3'>
                        <img className=' w-12 h-16  md:h-20 md:w-20  rounded-full' src="https://images.pexels.com/photos/447186/pexels-photo-447186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <h2 className='text-2xl font-semibold text-orange-500'>Donal Miu</h2>
                    </div>
                    <p className='text-gray-500 italic'>
                        Functionality-wise, the dummy product left much to be desired. Its purpose was unclear, and it failed to deliver any meaningful results or live up to its advertised features. Whether it was intended for entertainment or practical use, it simply failed to impress in every aspect, leaving me feeling underwhelmed and dissatisfied.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;