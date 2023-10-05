import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';

const App : React.FC = () => {
  return (
    <div className='app'>
       
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Accueil/>} />
        
     </Routes>
   </BrowserRouter>
 </div>
  );
};

export default App;