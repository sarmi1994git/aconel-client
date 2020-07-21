import * as ActionTypes from './ActionTypes';

export const CategoryDetail = (state = {
		isLoading: false,
		errMess: null,
		category: {}
	}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_CATEGORY_DETAIL:
			return {...state, isLoading: false, errMess: null, category: action.payload }
		case ActionTypes.CATEGORY_DETAIL_LOADING:
			return {...state, isLoading: true, errMess: null, category: {} }
		case ActionTypes.CATEGORY_DETAIL_FAILED:
			return {...state, isLoading: false, errMess: action.payload, category: {} }
		default:
			return state;
	}
}