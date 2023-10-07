import React from 'react';
import Navbar from '../components/Navbar';
import Welcoming_page from '../components/Welcoming_page';
import About from '../components/About';
import Services from '../components/Services';

const Accueil = () => {
    return (
        <div className='accueil'>
                 <Navbar/>
                 <Welcoming_page/>
                 <About/>
                 <Services/>
        </div>
    );
};

export default Accueil;
