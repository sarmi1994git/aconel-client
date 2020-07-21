import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Service from './ServiceComponent';
import Contact from './ContactComponent';
import CategoryDetail from './CategoryDetailComponent';
import About from './AboutComponent';
import { localUrl } from '../shared/localUrl';
import { NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchSlidesImages, fetchServices, fetchCategories, postContact } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
	return {
		slides: state.slides,
		services: state.services,
		categories: state.categories
	}
}

const mapDispatchToProps = (dispatch) => ({
	resetContactForm: () => { dispatch(actions.reset('contact'))},
	fetchSlidesImages: () => { dispatch(fetchSlidesImages()) },
	fetchCategories: () => { dispatch(fetchCategories()) },
	fetchServices: () => { dispatch(fetchServices()) },
	postContact: (contact) => dispatch(postContact(contact))
});

class Main extends Component {

	componentDidMount() {
		this.props.fetchSlidesImages();
		this.props.fetchServices();
		this.props.fetchCategories();
	}

	render() {
		const HomePage = () => {
			return (
				<Home slides={this.props.slides.slides}
					slidesLoading={this.props.slides.isLoading}
					slidesErrMess={this.props.slides.errMess} />
			);
		}

		const CategoryWithSlug = ({match}) => {
			return(
				<CategoryDetail slug={match.params.slug} />
			);
		}

		const ServicePage = () => {
			return(
				<Service services={this.props.services.services}
					isLoading={this.props.services.isLoading}
					errMess={this.props.services.errMess} />
			);
		}

		return(
			<div>
				<div className="container">
					<NavbarBrand className="mr-auto brand" href="/">
		            	<img src={localUrl + 'assets/images/aconel.jpg'} width="250" height="100"
		            		alt="Aconel" />
		            </NavbarBrand>
				</div>
				<Header categories={this.props.categories.categories}
					categoriesLoading={this.props.categories.isLoading}
					categoriesErrMess={this.props.categories.errMess} />
					<TransitionGroup>
						<CSSTransition key={this.props.location.key} className="page" timeout={300}>
							<Switch>
								<Route path="/home" component={HomePage} />
								<Route path="/aboutus" component={About} />
								<Route path="/categories/:slug" component={CategoryWithSlug} />
								<Route exact path="/services" component={ServicePage} />
								<Route exact path="/contactus" component={() => <Contact
								resetContactForm={this.props.resetContactForm}
								postContact={this.props.postContact} />} />
								<Redirect to="/home" />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));