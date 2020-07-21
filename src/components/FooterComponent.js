import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return(
		<div className="footer">
	        <div className="container">
	            <div className="row justify-content-center">             
	                <div className="col-4 offset-1 col-sm-2">
	                    <h5>Enlaces</h5>
	                    <ul className="list-unstyled">
	                        <li><Link to="/home">Inicio</Link></li>
	                    </ul>
	                </div>
	                <div className="col-7 col-sm-5">
	                    <h5>Nuestra dirección</h5>
	                    <address>
			              Durán, Cdla. Los Rosales<br />
			              Mz. J Solar 6<br />
			              ECUADOR<br />
			              <i className="fa fa-phone fa-lg"></i>: +593 99 116 0832<br />
			              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:aconel@hotmail.com">
	                         aconel@hotmail.com</a>
	                    </address>
	                </div>
	                <div className="col-12 col-sm-4 align-self-center">
	                    <div className="text-center">
	                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
	                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
	                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
	                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
	                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
	                        <a className="btn btn-social-icon" href="mailto:aconel@hotmail.com"><i className="fa fa-envelope-o"></i></a>
	                    </div>
	                </div>
	            </div>
	            <div className="row justify-content-center">             
	                <div className="col-auto">
	                    <p>© Copyright 2020 Aconel</p>
	                    <p>Develop by StartRest</p>
	                </div>
	            </div>
	        </div>
	    </div>
	);
}

export default Footer;