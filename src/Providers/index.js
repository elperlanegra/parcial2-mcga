import React, { useState, useEffect } from 'react';
import { providers as initalProviders } from '../mocks/providers.json';
import { Header } from './Header';
import { ProvidersList } from './ProvidersList';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getProvidersAsyncCreator } from '../redux/actions/providersActions';

function Provider() {
	//const { list, productSelected } = useSelector((state) => state.products);
	const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
	const [providers, setproviders] = useState(initalProviders);
	const [providerToEdit, setProviderToEdit] = useState(undefined);
	const dispatch = useDispatch();
	const { providerSelected, list } = useSelector((state) => state.providers);

	useEffect(() => {
		dispatch(getProvidersAsyncCreator());
		return () => {};
	}, );

	useEffect(() => {
		if (providerSelected) {
			setShowForm({ show: true, mode: 'Edit' });
		}
	}, [providerSelected]);

	const handleEditClick = (provider) => {
		setProviderToEdit(provider);
		setShowForm({ show: true, mode: 'Edit' });
	};

	const handleAddProvider = (provider) => {
		provider.id = uuidv4();
		setproviders([...providers, provider]);
	};

	const handleDeleteProvider = (id) => {
		const newProviders = providers.filter((provider) => provider.id !== id);
		setproviders(newProviders);
	};

	const handleEditProvider = (provider) => {
		const newProviders = providers.map((x) => (x.id === provider.id ? provider : x));
		setproviders(newProviders);
	};

	return (
		<div className="m-3">
			<Header
				showProviderForm={showForm}
				setShowProviderForm={setShowForm}
				onAddProvider={handleAddProvider}
				onEditProvider={handleEditProvider}
				providerToEdit={providerToEdit}
			/>
			<ProvidersList
				providerList={list}
				onDelete={handleDeleteProvider}
				onEdit={handleEditClick}
			/>
		</div>
	);
}

export default Provider;
