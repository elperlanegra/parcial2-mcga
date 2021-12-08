import React from 'react';
import { ProviderForm } from './ProviderForm';

export const EditProvider = (prop) => {
	const { providerToEdit } = prop;
	return <ProviderForm type="edit" provider={providerToEdit} />;
};
