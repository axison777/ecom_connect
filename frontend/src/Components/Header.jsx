import React from "react"
import {Link} from 'react-router-dom'


const Header = () =>{
    return (
         
         <>
        <nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
  <div class="container-fluid p-0">
      
      <Link class="navbar-brand" to="/"></Link>
        <img src="assets/images/logo.png" alt="logo"/>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item dropdown active dropdown-slide">
        <Link className="nav-link" to="/">Accueil</Link>
            <span></span>
          
        
         
		  
          
        </li>
		<li className="nav-item">
    <Link className="nav-link" to="/about">À propos</Link>
    <span></span>
</li>

       
        <li class="nav-item">
		<Link className="nav-link" to="/programme">Programme</Link>
		  <span></span>
        </li>
        <li class="nav-item">
		<Link className="nav-link" to="/sponsors">Sponsors</Link>
		<span></span>
        </li>
        <li class="nav-item dropdown dropdown-slide">
		<Link className="nav-link" to="/temoignage">Temoignages</Link>
            <span></span>
          
        
          
        </li>
        <li class="nav-item">
		<Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/inscription" class="ticket">
        <img src="assets/images/icon/ticket.png" alt="ticket"/>
        <span>Inscription</span>
		</Link>
      </div>
  </div>
</nav>
        </>
    )
}
    export default Header