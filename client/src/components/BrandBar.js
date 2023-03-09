import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
	const { device } = useContext(Context);
	return (
		<Row className="d-flex">
			{device.brands.map((brand) => (
				<Card
					role="button"
					border={
						device.selectedBrand.id === brand.id ? "primary" : "Secondary "
					}
					onClick={() => device.setSelectedBrand(brand)}
					className="p-3 w-auto m-1"
					key={brand.id}>
					{brand.name}
				</Card>
			))}
		</Row>
	);
});

export default BrandBar;
