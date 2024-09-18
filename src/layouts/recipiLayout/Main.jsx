import React from 'react';
import { Outlet } from 'react-router-dom';
import BannerSection from '../../src/pages/Banner/BannerSection';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <BannerSection></BannerSection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;