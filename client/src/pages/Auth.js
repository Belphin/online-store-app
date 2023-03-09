import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [isHiding, setIsHiding] = useState(true);

	const isHidingHandler = (e) => {
		setIsHiding(!e.target.checked);
	};

	return (
		<Container
			id="AuthForm"
			className="d-flex justify-content-center align-items-center">
			<Card id="AuthCard" className="p-5">
				<h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control className="mt-2" placeholder="Enter Email" />
					<Form.Control
						type={isHiding ? "password" : "text"}
						className="mt-2"
						placeholder="Enter password"
					/>
					{!isLogin && (
						<Form.Control
							type={isHiding ? "password" : "text"}
							className="mt-2"
							placeholder="Repeat password"
						/>
					)}
					<Row>
						<div id="AuthForm_Options" className="mt-2 mb-2">
							{isLogin ? (
								<div>
									No account?{" "}
									<NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
								</div>
							) : (
								<div>
									Have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
								</div>
							)}
							<label>
								Show password
								<input
									className="m-1"
									role="button"
									type="checkbox"
									value="1"
									onChange={isHidingHandler}
								/>
							</label>
						</div>
						<Button variant={"outline-success"}>
							{isLogin ? "Log in" : "Register"}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;
