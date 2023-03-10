import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.svg";

const DevicePage = () => {
	const device = { id: 1, name: "name", price: 1200, img: "adsf", rating: 5 };
	const description = [
		{ id: 1, title: "characteristic 1", description: "afdafasdg" },
		{ id: 2, title: "characteristic 2", description: "afdafasdg" },
		{ id: 3, title: "characteristic 3", description: "afdafasdg" },
		{ id: 4, title: "characteristic 4", description: "afdafasdg" },
		{ id: 5, title: "characteristic 5", description: "afdafasdg" },
	];
	return (
		<Container className="mt-3">
			<Row>
				<Col md={6} className="d-flex justify-content-center">
					<Image width={300} height={300} src={device.img} />
				</Col>
				<Col md={6} className="d-flex justify-content-center">
					<Row className="d-flex flex-column align-items-center">
						<h2>{device.name}</h2>
						<div
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 280,
								height: 280,
								backgroundSize: "cover",
								fontSize: 64,
							}}
							className="d-flex align-items-center justify-content-center">
							{device.rating}
						</div>
					</Row>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Card
					id="DevicePriceCard"
					className="d-flex flex-column align-items-center justify-content-around h-100 p-3 m-4">
					<h3>from: {device.price} UAH</h3>
					<Button variant={"outline-success"}>Add to cart</Button>
				</Card>
			</Row>
			<Row className="d-flex flex-column m-3">
				<h1>Characteristics</h1>
				{description.map((info, index) => (
					<Row
						key={info.id}
						style={{
							background: index % 2 === 0 ? "lightgray" : "transparent",
							padding: 10,
						}}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	);
};

export default DevicePage;
