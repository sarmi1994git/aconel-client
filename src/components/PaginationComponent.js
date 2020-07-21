import React from 'react';
import { Button } from 'reactstrap';
import { Loading } from './LoadingComponent';

function Pagination({increment, decrement, page, totalPages, products}) {
	if (products.products == null || products.products.length <= 0) {
		return(
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        );
	} else if (products.products != null){
		return(
			<React.Fragment>
				<Button color="dark" onClick={decrement}>Anterior</Button>
				<Button outline color="secondary">{'Página ' + page + 'de ' + (totalPages ? totalPages: '')}</Button>
				<Button color="dark" onClick={increment}>Siguiente</Button>
			</React.Fragment>
		);
	}
}

export default Pagination;