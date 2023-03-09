import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
	const isAuth = false;
	return (
		<Routes>
			{isAuth &&
				authRoutes.map(({ path, Element }) => (
					<Route key={path} path={path} element={<Element />} />
				))}
			{publicRoutes.map(({ path, Element }, i) => (
				<Route key={path + i} path={path} element={<Element />} />
			))}
		</Routes>
	);
};

export default AppRouter;
