import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Products } from './products';
import { Slides } from './slides';
import { Services } from './services';
import { Categories } from './categories';
import { CategoryDetail } from './categoryDetail';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialContact } from './forms';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			products: Products,
			slides: Slides,
			services: Services,
			categories: Categories,
			category: CategoryDetail,
			...createForms({
				contact: InitialContact
			})
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
}