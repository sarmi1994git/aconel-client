import React from 'react';
import { Loading } from './LoadingComponent';
import Slide from './SlideComponent';
import { NavLink } from 'react-router-dom';


function Home(props) {
	return(
		<React.Fragment>
			<div>
				<Slide slides={props.slides}
					isLoading={props.slidesLoading}
					errMess={props.slidesErrMess} />
			</div>
			<div className="container">
				<div className="row row-content">
					<div className="col-12 d-flex justify-content-center">
						<h2 align="center" className="col-12 col-md-10">Somos una empresa dedicada a la automatización, venta, reparación y mantenimiento 
						de maquinaria industrial, 
						</h2>
					</div>
				</div>
				<div className="row row-content">
					<div className="col-6 col-md-3 d-flex justify-content-center mb-3">
						<img src="assets/images/Siemens-Logo.png" width="150" height="60" alt="Siemens"/>
					</div>
					<div className="col-6 col-md-3 d-flex justify-content-center mb-3">
						<img src="assets/images/marcas/schneider750x300.png" width="150" height="60" alt="Schneider"/>
					</div>
					<div className="col-6 col-md-3 d-flex justify-content-center mb-3">
						<img src="assets/images/marcas/chint750x300.png" width="150" height="60" alt="Chint"/>
					</div>
					<div className="col-6 col-md-3 d-flex justify-content-center mb-3">
						<img src="assets/images/marcas/autonics750x300.png" width="150" height="60" alt="Autonics"/>
					</div>
				</div>
				<div className="row row-content-without-border">
					<div className="col-12 d-flex justify-content-center">
						<NavLink className="btn btn-dark" to="/contactus">Cotizar</NavLink>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;