import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Home = () =>{
	
	const [showFullText, setShowFullText] = useState(false);
	  
		const toggleText = () => {
		  setShowFullText(!showFullText);
		};
    return (
        <>
        <h1>
       






End of Navigation Section




<section class="banner bg-banner-one overlay">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				{/*Content Block*/ }
				<div class="block">
					{/*Coundown Timer*/}
					<div class="timer"></div>
					<h1>E-COMMERCE</h1>
					<h2>Connect 2024</h2>
					
					<h6>02-05 Dec 2024 OUAGADOUGOU</h6>
					<Link to="/Inscription" class="btn btn-main-md">Registration</Link>
				</div>
			</div>
		</div>
	</div>
</section>
	


<section class="section about">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="image-block bg-about">
					<img class="assets/img-fluid" src="images/speakers/featured-speaker.jpg" alt=""/>
				</div>
			</div>
			<div class="col-lg-8 col-md-6 align-self-center">
				<div class="content-block">
					<h2>About The <span class="alternate">E-commerce Connect</span></h2>
					<div class="description-one">
						<p>
						E-commerce Connect est une plateforme dynamique qui fédère l’écosystème africain du commerce électronique pour transformer les défis en opportunités et stimuler une croissance durable. Nous nous engageons à favoriser un environnement collaboratif où les startups, les experts, les leaders de l'industrie et les parties prenantes de toute l'Afrique et au-delà convergent pour partager des connaissances, développer des solutions innovantes et propulser le paysage du commerce électronique du continent vers un avenir prospère.
						</p>
					</div>
					
					<ul class="list-inline">
						<li class="list-inline-item">
						<Link to="/Inscription" class="btn btn-main-md">Registration</Link>
						</li>
						<li class="list-inline-item">
							<Link to="/About" class="btn btn-transparent-md">Read more</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="cta-ticket bg-ticket overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				 
			<div className="content-block">
      <h2>MOT DU <span className="alternate">PRESIDENT</span></h2>
      <p>
        Les défis sont sources d’opportunités ! Et des opportunités dans le e-commerce, nous en avons :
        <br />
        • Le manque d’infrastructures, logistique défaillante, la fragmentation du marché, … La liste est longue
        <br />
        • L’autre défi non négligeable est la venue des géants auquel nous aurons à faire face. Et cela s’explique par le fait que la seule véritable zone de croissance de la planète, c’est le marché très mosaïque qu’est l’Afrique. Et cela, les géants le savent. Ces derniers, confrontés à la saturation des marchés asiatiques, américains et européens, s’évertuent à tenir la promesse de croissance continue faite à leurs actionnaires.
        <br />
        {showFullText && (
          <>
            Nous ne sommes pas ici pour nous lamenter. Nous agissons !
            <br />
            Le E-commerce Connect n’est pas un simple forum de discussion. C’est une boîte à solutions. Un brainstorming grandeur nature réunissant startups, experts, acteurs de l’industrie de plusieurs pays d’Afrique et d’ailleurs ; pour mutualiser nos ressources, fédérer nos actions et développer des solutions communes et concrètes aux défis présentés.
            <br />
            Notre vision est claire : « Créer un écosystème e-commerce qui permettra à n’importe qui, de n’importe où, de se former sur les métiers du digital, créer, lancer et gérer un e-commerce depuis et/ou vers l’Afrique sans se soucier des aspects techniques et en ayant pour seules préoccupations, la recherche de clients et conclusion des ventes ! »
            <br />
            Ensemble nous allons :
            <ol>
              <li>Développer des infrastructures numériques robustes et accessibles</li>
              <li>Optimiser la logistique et la chaîne d’approvisionnement</li>
              <li>Améliorer l’inclusion financière et l’accès aux moyens de paiement</li>
              <li>Renforcer la formation et les compétences des acteurs du e-commerce</li>
              <li>Promouvoir le e-commerce transfrontalier et l’intégration régionale</li>
            </ol>
            Le moment est venu de passer à l’action. Rejoignez-nous dans cette aventure collective pour bâtir un e-commerce africain prospère et durable.
          </>
        )}
      </p>
      <button onClick={toggleText}>
        {showFullText ? "Voir moins" : "Voir plus"}
      </button>
    </div>
			</div>
		</div>
	</div>
	<div class="image-block"><img src="assets/images/speakers/pdg.png" alt="" class="img-fluid"/></div>
</section>






<section class="section schedule">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Event <span class="alternate">Schedule</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="schedule-tab">
					<ul class="nav nav-pills text-center">
					  <li class="nav-item">
					    <a class="nav-link active" href="#nov20" data-toggle="pill">
					    	Day-01
					    	<span>20 November 2017</span>
					    </a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link" href="#nov21" data-toggle="pill">
							Day-02
					    	<span>21 November 2017</span>
					    </a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link" href="#nov22" data-toggle="pill">
							Day-03
					    	<span>22 November 2017</span>
					    </a>
					  </li>
					</ul>
				</div>
				<div class="schedule-contents bg-schedule">
					<div class="tab-content" id="pills-tabContent">
					  <div class="tab-pane fade show active schedule-item" id="nov20">
					  	
					  	<ul class="m-0 p-0">
					  		<li class="headings">
					  			<div class="time">Time</div>
					  			<div class="speaker">Speaker</div>
					  			<div class="subject">Subject</div>
					  			<div class="venue">Venue</div>
					  		</li>
					  		
					  		<li class="schedule-details">
					  			<div class="block">
					  				  
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">9.00 AM</span>
							  		</div>
							  		
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
										<span class="name">Samanta Doe</span>
							  		</div>
							  		 
							  		<div class="subject">Introduction to Wp</div>
							  		
							  		<div class="venue">Auditorium A</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">10.00 AM</span>
							  		</div>
							  	
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
										<span class="name">Zerad Pawel</span>
							  		</div>
							  		 
							  		<div class="subject">Principle of Wp</div>
							  		
							  		<div class="venue">Auditorium B</div>
					  			</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">12.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
										<span class="name">Henry Mong</span>
							  		</div>
							  		 
							  		<div class="subject">Wp Requirements</div>
							  	
							  		<div class="venue">Auditorium C</div>
					  			</div>
					  		</li>
					  		 {/*Schedule Details*/}
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">2.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
										<span class="name">Baily Leo</span>
							  		</div>
							  		 
							  		<div class="subject">Introduction to Wp</div>
							  		 
							  		<div class="venue">Auditorium D</div>
					  			</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		
							  		<div class="subject">Useful tips for Wp</div>
							  		 
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		 
							  		<div class="subject">Useful tips for Wp</div>
							  		 
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  	</ul>
					  </div>
					  <div class="tab-pane fade schedule-item" id="nov21">
					  	 
					  	<ul class="m-0 p-0">
					  		<li class="headings">
					  			<div class="time">Time</div>
					  			<div class="speaker">Speaker</div>
					  			<div class="subject">Subject</div>
					  			<div class="venue">Venue</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
					  				 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">9.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
										<span class="name">Samanta Doe</span>
							  		</div>
							  		 
							  		<div class="subject">Introduction to Wp</div>
							  		 
							  		<div class="venue">Auditorium A</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">10.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
										<span class="name">Zerad Pawel</span>
							  		</div>
							  		 
							  		<div class="subject">Principle of Wp</div>
							  		 
							  		<div class="venue">Auditorium B</div>
					  			</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">12.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
										<span class="name">Henry Mong</span>
							  		</div>
							  		 
							  		<div class="subject">Wp Requirements</div>
							  		 
							  		<div class="venue">Auditorium C</div>
					  			</div>
					  		</li>
					  		
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">2.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
										<span class="name">Baily Leo</span>
							  		</div>
							  		
							  		<div class="subject">Introduction to Wp</div>
							  		
							  		<div class="venue">Auditorium D</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		 
							  		<div class="subject">Useful tips for Wp</div>
							  		 
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		 
							  		<div class="subject">Useful tips for Wp</div>
							  		 
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  	</ul>
					  </div>
					  <div class="tab-pane fade schedule-item" id="nov22">
					  	 
					  	<ul class="m-0 p-0">
					  		<li class="headings">
					  			<div class="time">Time</div>
					  			<div class="speaker">Speaker</div>
					  			<div class="subject">Subject</div>
					  			<div class="venue">Venue</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
					  				 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">9.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
										<span class="name">Samanta Doe</span>
							  		</div>
							  		 
							  		<div class="subject">Introduction to Wp</div>
							  		 
							  		<div class="venue">Auditorium A</div>
					  			</div>
					  		</li>
					  		
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">10.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
										<span class="name">Zerad Pawel</span>
							  		</div>
							  		 
							  		<div class="subject">Principle of Wp</div>
							  		
							  		<div class="venue">Auditorium B</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">12.00 AM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
										<span class="name">Henry Mong</span>
							  		</div>
							  		 
							  		<div class="subject">Wp Requirements</div>
							  		 
							  		<div class="venue">Auditorium C</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">2.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
										<span class="name">Baily Leo</span>
							  		</div>
							  		 
							  		<div class="subject">Introduction to Wp</div>
							  		  
							  		<div class="venue">Auditorium D</div>
					  			</div>
					  		</li>
					  		  
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		 
							  		<div class="subject">Useful tips for Wp</div>
							  		 
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  		 
					  		<li class="schedule-details">
					  			<div class="block">
						  			 
							  		<div class="time">
							  			<i class="fa fa-clock-o"></i>
							  			<span class="time">3.00 PM</span>
							  		</div>
							  		 
							  		<div class="speaker">
							  			<img src="assets/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
										<span class="name">Lee Mun</span>
							  		</div>
							  		 
							  		<div class="subject">Useful tips for Wp</div>
							  		
							  		<div class="venue">Auditorium E</div>
					  			</div>
					  		</li>
					  	</ul>
					  </div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</section>






<section class="section speakers bg-speaker overlay-lighter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				 
				<div class="section-title white">
					<h3>Our <span class="alternate">Team</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6">
				  
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-one.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-two.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				 
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-three.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-four.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				 
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-five.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				 
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-six.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-five.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				
				<div class="speaker-item">
					<div class="image">
						<img src="assets/images/speakers/speaker-six.jpg" alt="speaker" class="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><a href="single-speaker.html">Johnathan Franco</a></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="sponsors section bg-sponsors overlay-white">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Our <span class="alternate">Sponsors</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				 
				<div class="sponsor-title text-center">
					<h5>Platinum Sponsors</h5>
				</div>
				<div class="block text-center">
					  
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/pt-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/pt-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/pt-spon-three.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/pt-spon-four.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
					</ul>
				</div>
				  
				<div class="sponsor-title text-center">
					<h5>Gold Sponsors</h5>
				</div>
				<div class="block text-center">
					  
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/gl-spon-one.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/gl-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="assets/images/sponsors/gl-spon-three.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="sponsor-btn text-center">
				<Link to="/Sponsors" class="btn btn-main-md">Devenir sponsors</Link>
				</div>
			</div>
		</div>
	</div>
</section>












<section class="news section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Actualité <span class="alternate">Ecommerce</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="assets/images/news/post-thumb-one.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="assets/images/news/post-thumb-two.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="assets/images/news/post-thumb-three.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="cta-subscribe bg-subscribe overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mr-auto">
				  
				<div class="content">
					<h3>Subscribe to Our <span class="alternate">Newsletter</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
				</div>
			</div>
			<div class="col-md-6 ml-auto align-self-center">
				 
				<form action="#" class="row">
					<div class="col-lg-8 col-md-12">
						<input type="email" class="form-control main white mb-lg-0" placeholder="Email"/>
					</div>
					<div class="col-lg-4 col-md-12">
						<div class="subscribe-button">
							<button class="btn btn-main-md">Subscribe</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>



<section class="map">
	 
	<div id="map"></div>
	<div class="address-block">
		<h4>Docklands Convention</h4>
		<ul class="address-list p-0 m-0">
			<li><i class="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, <br/>Dhanmondy, Dhaka.</span></li>
			<li><i class="fa fa-phone"></i><span>[88] 657 524 332</span></li>
		</ul>
		<a href="#" class="btn btn-white-md">Get Direction</a>
	</div>
</section>






   
   
  <script src="assets/plugins/jquery/jquery.js"></script>
   
  <script src="assets/plugins/popper/popper.min.js"></script>
   
  <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
  
  <script src="assets/plugins/smoothscroll/SmoothScroll.min.js"></script>  
  
  <script src="assets/plugins/isotope/mixitup.min.js"></script>  
    
  <script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
    
  <script src="assets/plugins/slick/slick.min.js"></script>  
  
  <script src="assets/plugins/syotimer/jquery.syotimer.min.js"></script>
  
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
  <script type="text/javascript" src="plugins/google-map/gmap.js"></script>
 
  <script src="assets/js/custom.js"></script>

        </h1>
        </>
    )
}
export default Home