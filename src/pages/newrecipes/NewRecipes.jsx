import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from '../Services/Services';

const NewRecipes = () => {

    const handleBuy = () => {
        toast.success('Payment Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Our Newest Recipes</h2>



            <div className=' p-8  mx-auto md:grid grid-cols-3 gap-10 container md:mb-24 md:mt-10 md:container'>
                <div className=" bg-base-100 rounded-lg shadow-xl mb-8 ">
                    <figure><img className='rounded-lg' src="https://static01.nyt.com/images/2022/01/26/dining/24AIRFRYERREX1-chicken-parmesan/merlin_200287671_7c6f509b-af22-4086-a2b8-4f36a58ffbec-articleLarge.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Chicken Parmesan
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <div className=" bg-base-100 rounded-lg shadow-xl mb-8">
                    <figure><img className='rounded-lg' src="https://thefancypantskitchen.com/wp-content/uploads/2022/06/CHEESY-CRUNCHY-BEEF-TACOS4-600x400.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Pasta Carbonara
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <div className="bg-base-100 rounded-lg  shadow-xl mb-8">
                    <figure><img className='rounded-lg' src="https://salu-salo.com/wp-content/uploads/2017/03/Garlic-Shrimp-with-Chili-Sauce-1.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Beef Tacos
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <div className=" bg-base-100 rounded-lg shadow-xl mb-8">
                    <figure><img className='rounded-lg' src="https://theculturecook.com/recipes/photos/small_16129608-F23B-3111-21577E11117D37B3.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Garlic Shrimp
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <div className=" bg-base-100 rounded-lg shadow-xl mb-8">
                    <figure><img className='rounded-lg' src="https://www.melskitchencafe.com/wp-content/uploads/caesar-salad2-600x400.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Classic Caesar Salad
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <div className=" bg-base-100 rounded-lg shadow-xl mb-8">
                    <figure> <img className='rounded-lg' src="https://oran-mor.co.uk/wp-content/uploads/2023/02/fonn-mor-6-600x400.jpeg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Fish Parmesan
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Chicken Parmesan and chicken Parmigiana are just different names for the same exact recipe.</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBuy} className="badge badge-outline p-3 font-bold mt-2">BUY NOW</button>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

            <Services></Services>



        </div>
    );
};

export default NewRecipes;