import React, { Component } from 'react';
import { fetchCategory, fetchProductsByCategory } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import ProductList from './ProductListComponent';
import Pagination from './PaginationComponent';

const mapStateToProps = state => {
		return {
			products: state.products,
			category: state.category
		}
}

const mapDispatchToProps = dispatch => ({
	fetchCategory: (slug) => dispatch(fetchCategory(slug)),
	fetchProductsByCategory: (categoryId, page, size) => dispatch(fetchProductsByCategory(categoryId, page, size))
});

const size = 20;

class CategoryDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1
		};
		this.increment = this.increment.bind(this);
	}

	componentDidMount() {
		this.props.fetchCategory(this.props.slug)
		.then(response => {
			this.props.fetchProductsByCategory(this.props.category.category.id, 1, size);
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const { currentPage } = this.state;
		if ( currentPage !== prevState.currentPage) {
			if (currentPage > 0 && currentPage <= this.props.products.products.totalPages) {
				this.props.fetchProductsByCategory(this.props.category.category.id, currentPage, size);
			} else if (currentPage <= 0) {
				this.setState({
					currentPage: 1
				});
			} else if (currentPage > this.props.products.products.totalPages) {
				this.setState({
					currentPage: prevState.currentPage
				});
			}
		}
	}

	increment() {
		const { currentPage } = this.state;
		this.setState({
			currentPage: currentPage + 1,
		});
	}

	decrement = () => {
		const { currentPage } = this.state;
		this.setState({
			currentPage: currentPage - 1
		});
	}


	render() {
		const { currentPage } = this.state;
		if (this.props.category.isLoading) {
			return(
	            <div className="container">
	                <div className="row">
	                    <Loading />
	                </div>
	            </div>
	        );
		} else if (this.props.category.errMess) {
			return(
	            <div className="container">
	                <div className="row">
	                    <h4>{this.props.category.errMess}</h4>
	                </div>
	            </div>
	        );
		} else if (this.props.category.category != null){
			const category = this.props.category.category;
			return(
				<div className="container">
					<div className="row">
						<Breadcrumb>
	                        <BreadcrumbItem><Link to='/home'>Inicio</Link></BreadcrumbItem>
	                        <BreadcrumbItem>Categorías</BreadcrumbItem>
	                        <BreadcrumbItem active>{category.name}</BreadcrumbItem>
	                    </Breadcrumb>
					</div>
					<div className="row row-content-without-border">
						<ProductList products={this.props.products.products}
						isLoading={this.props.products.isLoading}
						errMess={this.props.products.errMess} />
					</div>
					<div className="row row-content d-flex justify-content-center">
						<Pagination increment={this.increment}
							decrement={this.decrement} 
							page={currentPage}
							totalPages={this.props.products.products.totalPages}
							products={this.props.products.products} />
					</div>
				</div>	
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);