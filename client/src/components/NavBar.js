import React, { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const route = useNavigate();
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink id="NavBar_BrandNavLink" to={SHOP_ROUTE}>
					Online store
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto">
						<Button variant={"outline-light"}>Admin panel</Button>
						<div className="vr m-1" />
						<Button
							variant={"outline-light"}
							onClick={() => user.setIsAuth(false)}>
							Logout
						</Button>
					</Nav>
				) : (
					<Nav>
						<Button
							variant={"outline-light"}
							onClick={() => route(LOGIN_ROUTE)}>
							Authorization
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
