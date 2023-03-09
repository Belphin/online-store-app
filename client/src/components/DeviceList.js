import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
	const { device } = useContext(Context);
	return (
		<Row className="d-flex m-auto">
			{device.devices.map((device) => (
				<DeviceItem device={device} />
			))}
		</Row>
	);
});

export default DeviceList;
