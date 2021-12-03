import React from 'react';
import { ProviderItem } from './ProviderItem';

export const ProvidersList = (props) => {
  const { providerList, onDelete, onEdit } = props;
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Nombre Proveedor</th>
            <th>Tipo Proveedor</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Ciudad</th>
            <th>Codigo Postal</th>
            <th>Options</th>
          </tr>
        </thead>
        {providerList.map((provider) => (
          <ProviderItem
            key={provider.id}
            providerToShow={provider}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </table>
    </div>
  );
};
