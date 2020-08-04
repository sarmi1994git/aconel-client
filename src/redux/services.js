import * as ActionTypes from './ActionTypes';

export const Services = (state = {
		isLoading: true,
		errMess: null,
		services: null
	}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_SERVICES:
			return {...state, isLoading: false, errMess: null, services: action.payload }
		case ActionTypes.SERVICES_LOADING: 
			return {...state, isLoading: true, errMess: null, services: null }
		case ActionTypes.SERVICES_FAILED:
			return {...state, isLoading: false, errMess: action.payload, services: null }
		default:
			return state;
	}

}