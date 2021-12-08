import { // providers PROVIDER
	ADD_PROVIDER,
	REMOVE_PROVIDER,
	EDIT_PROVIDER,
	GET_PROVIDERS,
} from '../../constants/providersTypes';

const initialState = {
	list: [],
	isLoading: false,
	error: '',
};

export const providersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROVIDER:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case REMOVE_PROVIDER:
			return {
				...state,
				list: state.list.filter((provider) => provider._id !== action.payload),
			};
		case EDIT_PROVIDER:
			return {
				...state,
				list: state.list.map((provider) =>
				provider.id === action.payload._id ? action.payload : provider
				),
			};
		case GET_PROVIDERS:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};
