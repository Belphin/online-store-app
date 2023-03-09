import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import star from "../assets/star.svg";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
	const router = useNavigate();

	return (
		<Col
			xl={2}
			lg={3}
			md={4}
			sm={6}
			xs={6}
			className="mt-3"
			onClick={() => router(DEVICE_ROUTE + "/" + device.id)}>
			<Card id="DeviceCard" border={"light"}>
				<Image width={150} height={150} src={device.img} />
				<div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
					<div>Apple...</div>
					<div className="d-flex">
						<div>{device.rating}</div>
						<Image width={18} src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	);
};

export default DeviceItem;
