import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Inscription from './Pages/Inscription'
import Pagenotfound from './Pages/Pagenotfound'
import Programme from './Pages/Programme'
import Sponsors from './Pages/Sponsors'
import Temoignage from './Pages/Temoignage'
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
       
      
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/inscription' element={<Inscription />} />
          <Route path='/pagenotfound' element={<Pagenotfound />} />
          <Route path='/programme' element={<Programme />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/temoignage' element={<Temoignage />} />
        </Routes>
        <Footer/>
    
        
    </div>
  );
}

export default App;
