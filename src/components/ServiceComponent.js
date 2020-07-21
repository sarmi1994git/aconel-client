import React from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger} from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function Service(props) {
	if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.services != null) {
    	const services = props.services.map((service, i) => {
            return (
                <Fade in key={i}>
                    <RenderService service={service} />
                </Fade>
            );
        });
        return(
			<div className="container">
				<div className="row">
					<Breadcrumb>
	                    <BreadcrumbItem><Link to="/">Inicio</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>Servicios</BreadcrumbItem>
	                </Breadcrumb>
	                <div className="col-12">
	                    <h3>Nuestros servicios</h3>
	                    <hr />
	                </div>         
				</div>
	            <div className="row row-content">
	                <div className="col-12">
	                    <Media list>
	                        <Stagger in>
	                            {services}
	                        </Stagger>
	                    </Media>
	                </div>
	            </div>
			</div>
		);
    }
}

function RenderService(props) {
	const image = props.service.images.filter((image) => image.main)[0];
	return(
        <div key={props.service.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={image.src} alt={image.alt} width="192" height="192" />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{props.service.name}</Media>
                    <p className="justify">{props.service.description}</p>
                </Media>
            </Media>
        </div>
    );
}

export default Service;