import React from 'react';
import Navbar from '../components/Navbar';
import Welcoming_page from '../components/Welcoming_page';
import About from '../components/About';
import Services from '../components/Services';
import Path from '../components/Path';

const Accueil = () => {
    return (
        <div className='accueil'>
                 <Navbar/>
                 <Welcoming_page/>
                 <About/>
                 <Services/>
                 <Path/>
        </div>
    );
};

export default Accueil;

