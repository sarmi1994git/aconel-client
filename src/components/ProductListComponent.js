import React from 'react';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function ProductList(props) {
	if (props.isLoading) {
		return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
	} else if (props.errMess) {
		return(
            <div className="container">
                <div className="row">
                	<div className="col-12 d-flex justify-content-center">
                		<h4>{props.errMess}</h4>
                	</div>
                </div>
            </div>
        );
	} else if (props.products != null) {
		const products = props.products.products;
		const productsList = products.map((product, i) => {
			const image = product.featuredImage;
			return(
				<div className="col-12 col-md m-1" key={i}>
					<FadeTransform in 
						transformProps={{
							exitTransform: 'scale(0.5) translateY(-50%)'
						}} >
						<Card>
							<CardImg src={image ? image.src : ''} alt={image ? image.alt: ''} width="300" height="300" />
							<CardBody>
								<CardTitle>{product.name}</CardTitle>
								<CardText>{product.description ? product.description.substring(0, 100) : '' }{' ...'}</CardText>
							</CardBody>
						</Card>
					</FadeTransform>
				</div>
			);
		});
		return(
			productsList
		);
	}
}
export default ProductList;
