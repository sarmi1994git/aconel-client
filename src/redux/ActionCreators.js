import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchProducts = () => (dispatch) => {
	dispatch(productsLoading(true));
	return fetch(baseUrl + '/products')
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(products => dispatch(addProducts(products)))
		.catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
	type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
	type: ActionTypes.PRODUCTS_FAILED,
	payload: errmess
});

export const addProducts = (products) => ({
	type: ActionTypes.ADD_PRODUCTS,
	payload: products
});

//SLIDES IMAGES
export const fetchSlidesImages = () => (dispatch) => {
	dispatch(slidesImagesLoading(true));
	return fetch(baseUrl + '/images?category=Slide')
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(slides => dispatch(addSlidesImages(slides)))
		.catch(error => dispatch(slidesImagesFailed(error.message)));
}

export const slidesImagesLoading = () => ({
	type: ActionTypes.SLIDES_IMAGES_LOADING
});

export const slidesImagesFailed = (errmess) => ({
	type: ActionTypes.SLIDES_IMAGES_FAILED,
	payload: errmess
});

export const addSlidesImages = (slides) => ({
	type: ActionTypes.ADD_SLIDES_IMAGES,
	payload: slides
});

//SERVICES
export const fetchServices = () => (dispatch) => {
	dispatch(servicesLoading(true));
	return fetch(baseUrl + '/services')
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(services => dispatch(addServices(services)))
		.catch(error => dispatch(servicesFailed(error.message)));
}

export const servicesLoading = () => ({
	type: ActionTypes.SERVICES_LOADING
});

export const servicesFailed = (errmess) => ({
	type: ActionTypes.SERVICES_FAILED,
	payload: errmess
});

export const addServices = (services) => ({
	type: ActionTypes.ADD_SERVICES,
	payload: services
});

//CONTACTS

export const postContact = (contact) => (dispatch) => {
	return fetch(baseUrl + '/contacts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(contact),
		credentials: 'same-origin'
	});
}

// CATEGORÍAS
export const fetchCategories = () => (dispatch) => {
	dispatch(categoriesLoading(true));
	return fetch(baseUrl + '/categories')
	.then(response => {
		if (response.ok) {
			return response;
		} else {
			var error = new Error('Error ' + response.status + ': ' + response.statusText);
			error.response = response;
			throw error;
		}
	}, error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(categories => dispatch(addCategories(categories)))
	.catch(error => dispatch(categoriesFailed(error.message)));
}

export const categoriesLoading = () => ({
	type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) => ({
	type: ActionTypes.CATEGORIES_FAILED,
	payload: errmess
});

export const addCategories = (categories) => ({
	type: ActionTypes.ADD_CATEGORIES,
	payload: categories
});

//DETALLE DE CATEGORÍA
export const fetchCategory = (slug) => (dispatch) => {
	dispatch(categoryLoading(true));
	return fetch(baseUrl + '/categories/slug/' + slug)
	.then(response => {
		if (response.ok) {
			return response;
		} else {
			var error = new Error('Error ' + response.status + ': ' + response.statusText);
			error.response = response;
			throw error;
		}
	}, error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(category => dispatch(addCategory(category)))
	.catch(error => dispatch(categoryFailed(error.message)));
} 

export const categoryLoading = () => ({
	type: ActionTypes.CATEGORY_DETAIL_LOADING
});

export const categoryFailed = (errmess) => ({
	type: ActionTypes.CATEGORY_DETAIL_FAILED,
	payload: errmess
});

export const addCategory = (category) => ({
	type: ActionTypes.ADD_CATEGORY_DETAIL,
	payload: category
});


//PRODUCTOS POR CATEGORIA
export const fetchProductsByCategory = (categoryId, page, size) => (dispatch) => {
	dispatch(productsLoading(true));
	if (categoryId) {
		return fetch(baseUrl + '/categories/' + categoryId + '/products?page=' + page + '&size=' + size)
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(products => dispatch(addProducts(products)))
		.catch(error => dispatch(productsFailed(error.message)));
	}
}