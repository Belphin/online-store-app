import React, { useContext, useState } from "react";
import {
	Button,
	Col,
	Dropdown,
	Form,
	FormControl,
	Modal,
	Row,
} from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
	const { device } = useContext(Context);
	const [info, setInfo] = useState([]);

	const addInfo = () => {
		setInfo((prev) => [
			...prev,
			{ title: "", descritpion: "", number: Date.now() },
		]);
	};
	const removeInfo = (number) => {
		setInfo((prev) => prev.filter((a) => a.number != number));
	};

	return (
		<Modal show={show} onHide={onHide} size="lg" centered>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>Select type</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>Select brand</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className="mt-3" placeholder="Enter device name" />
					<Form.Control
						className="mt-3"
						placeholder="Select device image"
						type="file"
					/>
					<Form.Control
						className="mt-3"
						placeholder="Enter device price"
						type="number"
					/>
					<hr />
					<Button variant={"outline-dark"} onClick={addInfo}>
						Add new property
					</Button>
					{info.map((i) => (
						<Row key={i.number} className="mt-3">
							<Col md={4}>
								<Form.Control placeholder="Enter name" />
							</Col>
							<Col md={5}>
								<Form.Control placeholder="Enter description" />
							</Col>
							<Col md={3}>
								<Button
									onClick={() => removeInfo(i.number)}
									variant={"outline-danger"}>
									Deltete
								</Button>
							</Col>
						</Row>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>
					Close
				</Button>
				<Button variant={"outline-success"} onClick={onHide}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateDevice;
