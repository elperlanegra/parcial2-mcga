import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncCreator, editAsyncCreator } from '../redux/actions/providersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export const ProviderForm = (props) => {
	const dispatch = useDispatch();
	const { type, provider } = props;
	const [nombre_proveedor, setName] = useState(provider ? provider.nombre_proveedor : '');
	const [tipo_proveedor, setProveedor] = useState(provider ? provider.tipo_proveedor : '');
	const [email_proveedor, setEmail] = useState(provider ? provider.email_proveedor : '');
	const [telefono_proveedor, setTelefono] = useState(provider ? provider.telefono_proveedor : '');
	const [ciudad_proveedor, setCiudad] = useState(provider ? provider.ciudad_proveedor : '');
	const [codigo_postal, setPostal] = useState(provider ? provider.codigo_postal: '');

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const provider = { nombre_proveedor, tipo_proveedor, email_proveedor, telefono_proveedor, ciudad_proveedor,codigo_postal };
			const action = addAsyncCreator(provider);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadProvider = {
				id: provider._id,
				nombre_proveedor,
			    tipo_proveedor,
				email_proveedor, 
				telefono_proveedor,
				ciudad_proveedor,
				codigo_postal,
			};
			const action = editAsyncCreator(payloadProvider);
			dispatch(action);
		}
		setName('');
		setProveedor('');
		setEmail('');
		setTelefono('');
		setCiudad('');
		setPostal('');
	};

	useEffect(() => {
		setName(provider ? provider.nombre_proveedor : '');
		setProveedor(provider ? provider.tipo_proveedor : '');
		setEmail(provider ? provider.email_proveedor : '');
		setTelefono(provider ? provider.telefono_proveedor : '');
		setCiudad(provider ? provider.ciudad_proveedor : '');
		setPostal(provider ? provider.codigo_postal : '');
	}, [provider]);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="btn btn-info ms-2">
				Launch modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Provider modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit} className="mt-3">
						<input
							type="text"
							name="nombre_proveedor"
							placeholder="Nombre proveedor"
							className="form-control mb-3"
							onChange={(e) => setName(e.target.value)}
							value={nombre_proveedor}
						/>

						<input
							type="text"
							name="tipo_proveedor"
							placeholder="tipo proveedor"
							className="form-control mb-3"
							onChange={(e) => setProveedor(e.target.value)}
							value={tipo_proveedor}
						/>
						<input
							type="text"
							name="email_proveedor"
							placeholder="email proveedor"
							className="form-control mb-3"
							onChange={(e) => setEmail(e.target.value)}
							value={email_proveedor}
						/>
						<input
							type="number"
							name="telefono_proveedor"
							placeholder="telefono proveedor"
							className="form-control mb-3"
							onChange={(e) => setTelefono(e.target.value)}
							value={telefono_proveedor}
						/>
						<input
							type="text"
							name="ciudad_proveedor"
							placeholder="ciudad proveedor"
							className="form-control mb-3"
							onChange={(e) => setCiudad(e.target.value)}
							value={ciudad_proveedor}
						/>
						<input
							type="number"
							name="codigo_postal"
							placeholder="codigo postal"
							className="form-control mb-3"
							onChange={(e) => setPostal(e.target.value)}
							value={codigo_postal}
						/>
						<button className="btn btn-success" type="submit">
							Confirm
						</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
