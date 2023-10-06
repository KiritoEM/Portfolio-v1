import React from 'react';
import Navbar from '../components/Navbar';
import Welcoming_page from '../components/Welcoming_page';
import About from './About';

const Accueil = () => {
    return (
        <div className='accueil'>
                 <Navbar/>
                 <Welcoming_page/>
                 <About/>
        </div>
    );
};

export default Accueil;
