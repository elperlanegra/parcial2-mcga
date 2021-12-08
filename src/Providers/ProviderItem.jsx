import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteAsyncCreator } from '../redux/actions/providersActions';

export const ProviderItem = (props) => {
	const dispatch = useDispatch();
	const { providerToShow, onEdit } = props;

	const handleDelete = (id) => {
		const action = deleteAsyncCreator(providerToShow._id);
		dispatch(action);
	};

	return (
		<tr>
			<td>{providerToShow.nombre_proveedor}</td>
			<td>{providerToShow.tipo_proveedor}</td>
			<td>{providerToShow.email_proveedor}</td>
			<td>{providerToShow.telefono_proveedor}</td>
			<td>{providerToShow.ciudad_proveedor}</td>
			<td>{providerToShow.codigo_postal}</td>
			<td>
				<EditIcon
					onClick={() => onEdit(providerToShow)}
					style={{ cursor: 'pointer', color: 'red' }}
				/>
				<DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
			</td>
		</tr>
	);
};
