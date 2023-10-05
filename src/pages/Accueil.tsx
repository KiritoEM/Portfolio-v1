import React from 'react';
import Navbar from '../components/Navbar';
import Welcoming_page from '../components/Welcoming_page';

const Accueil = () => {
    return (
        <div className='accueil'>
                 <Navbar/>
                 <Welcoming_page/>
        </div>
    );
};

export default Accueil;
