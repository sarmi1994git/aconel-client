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
							Aconel es una empresa dedicada a la compra-venta de productos de automatización industrial y ofrece servicios de soporte y mantenimiento técnico de maquinaria industrial.
							La misión de aconel es ser una empresa líder en la comercialización de productos de automatización, satisfaciendo las necesidades de nuestro clientes, ofreciéndoles productos y servicios de calidad.
						</p>
					</div>
				</div>
				<div className="row row-content d-flex justify-content-center">
					<div className="col-12">
						<h2 align="center">Visión</h2>
					</div>
					<div className="col-12 col-md-8">
						<p align="justify">
							Ser el mayor distribuidor a nivel nacional de tecnologías de automatización.
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default About;