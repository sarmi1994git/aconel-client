import React from 'react';
import { localUrl } from '../shared/localUrl';

function About() {
	return(
		<React.Fragment>
			<div>
				<img className="about-img" src={localUrl + 'assets/images/aboutus/construction-1920x900.jpg'} alt="Industria" />
			</div>
			<div className="container">
				<div className="row row-content d-flex justify-content-center">
					<div className="col-12">
						<h2 align="center">Misión</h2>
					</div>
					<div className="col-12 col-md-8">
						<p align="justify">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</p>
					</div>
				</div>
				<div className="row row-content d-flex justify-content-center">
					<div className="col-12">
						<h2 align="center">Visión</h2>
					</div>
					<div className="col-12 col-md-8">
						<p align="justify">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default About;