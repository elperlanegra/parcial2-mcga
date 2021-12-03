import {
	ADD_PROVIDER,
	REMOVE_PROVIDER,
	EDIT_PROVIDER,
	GET_PROVIDERS,
} from '../../constants/providersTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const creatorAddProvider = (provider) => {
	provider.id = uuidv4();

	return {
		type: ADD_PROVIDER,
		payload: provider,
	};
};
export const creatorRemoveProvider = (providerId) => {
	return {
		type: REMOVE_PROVIDER,
		payload: providerId,
	};
};

export const creatorEditProvider = (provider) => {
	return {
		type: EDIT_PROVIDER,
		payload: provider,
	};
};

export const getProviders = (providers) => {
	return {
		type: GET_PROVIDERS,
		payload: providers,
	};
};

export const deleteAsyncCreator = (providerId) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`https://parcial-mena.herokuapp.com/api/proveedores/${providerId}`
			);
			console.log(response);
			if (response.status === 202) {
				const action = (providerId);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const addAsyncCreator = (provider) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				'https://parcial-mena.herokuapp.com/api/proveedores',
				provider
			);
			console.log(response);
			if (response.status === 201) {
				const action = creatorAddProvider(response.data.dato);
				dispatch(action);
			}
		} catch (error) {}
	};
};

export const editAsyncCreator = (provider) => {
	console.log(provider)
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`https://parcial-mena.herokuapp.com/api/proveedores/${provider.id}`,
				provider
			);
			console.log(response);
			if (response.status === 200) {
				const action = creatorEditProvider(response.data.proveedor);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const getProvidersAsyncCreator = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				'https://parcial-mena.herokuapp.com/api/proveedores'
			);

			if (response.status === 200) {
				
				let data = [];
				if(response.data) data = response.data;
				
				const action = getProviders(data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
