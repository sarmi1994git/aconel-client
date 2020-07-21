import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { localUrl } from '../shared/localUrl';
import '../styles/Nav.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return(
			<Navbar dark expand="md">
				<div className="container">
					<NavbarToggler onClick={this.toggleNav} />
		            <Collapse isOpen={this.state.isNavOpen} navbar>
		            	<Nav navbar>
		            		<NavItem className="mr-3">
		            			<NavLink className="nav-link" to="/home">
		            				<span className="fa fa-home fa-lg"></span> Inicio
		            			</NavLink>
		            		</NavItem>
		            		<NavItem className="mr-3">
		            			<NavLink className="nav-link" to="/aboutus">
		            				Quiénes somos
		            			</NavLink>
		            		</NavItem>
		            		<UncontrolledDropdown nav inNavbar>
			            		<DropdownToggle nav caret>
			            			Productos
			            		</DropdownToggle>
			            		<DropdownMenu className='bg-dark-aux'>
			            			<RenderCategories categories={this.props.categories}
			            				isLoading={this.props.categoriesLoading}
			            				errMess={this.props.categoriesErrMess} />
			            		</DropdownMenu>
		            		</UncontrolledDropdown>
		            		<NavItem className="mr-3">
		            			<NavLink className="nav-link" to="/services">
		            				Servicios
		            			</NavLink>
		            		</NavItem>
		            		<NavItem className="mr-3">
		            			<NavLink className="nav-link" to="/contactus">
		            				Contáctenos
		            			</NavLink>
		            		</NavItem>
		            	</Nav>
		            </Collapse>
				</div>
			</Navbar>
		);
	}
}

function RenderCategories(props) {
	if (props.isLoading) {
		return(
			<DropdownItem>
				<Loading />
			</DropdownItem>
		);
	} else if (props.errMess) {
		return(
			<DropdownItem>
				props.errMess
			</DropdownItem>
		);
	} else {
		const categories = props.categories.map(item => {
			return(
				<DropdownItem key={item.id}>
    				<NavLink className="nav-link" to={'/categories/' + item.slug}>
        				{item.name}
        			</NavLink>
    			</DropdownItem>
			);
		});

		return (categories);
	}
}

export default Header;