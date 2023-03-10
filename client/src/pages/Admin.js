import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
	const [typeVisible, setTypeVisible] = useState(false);
	const [brandVisible, setBrandVisible] = useState(false);
	const [deviceVisible, setDeviceVisible] = useState(false);

	return (
		<Container className="d-flex flex-column">
			<Button
				variant={"outline-dark"}
				className="mt-4"
				onClick={() => setTypeVisible(true)}>
				Add type
			</Button>
			<Button
				variant={"outline-dark"}
				className="mt-4"
				onClick={() => setBrandVisible(true)}>
				Add brand
			</Button>
			<Button
				variant={"outline-dark"}
				className="mt-4"
				onClick={() => setDeviceVisible(true)}>
				Add device
			</Button>
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateDevice
				show={deviceVisible}
				onHide={() => setDeviceVisible(false)}
			/>
		</Container>
	);
};

export default Admin;
