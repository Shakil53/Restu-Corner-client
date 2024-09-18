import { useEffect, useState } from 'react';
import SingleCheif from '../../pages/singleCheif/SingleCheif';
import NewRecipes from '../newRecipes/NewRecipes';


const OurCheif = () => {

    const [cheifs, setSheifs] = useState([]);

    useEffect(() => {
        fetch('https://food-corner-server-bijoymamud.vercel.app/allCheifs')
            .then(res => res.json())
            .then(data => setSheifs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2 className=' mt-20 text-center text-4xl font-bold md:mt-20'>Cheifs Introduction</h2>

            <div className=' mx-auto md:grid grid-cols-2 md:gap-10 container md:mb-64 px-1 md:container'>
                {
                    cheifs.map(cheif => <SingleCheif

                        key={cheif.id}
                        cheif={cheif}

                    ></SingleCheif>)
                }
            </div>
            <NewRecipes></NewRecipes>
        </div>
    );
};

export default OurCheif;