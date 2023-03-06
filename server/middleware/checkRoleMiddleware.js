const jwt = require("jsonwebtoken");

module.exports = (role) => (req, res, next) => {
	if (req.method === "OPTIONS") {
		next();
	}
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "Not authorized" });
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (decoded.role !== role) {
			return res.status(403).json({ message: "Not access" });
		}
		req.user = decoded;
		next();
	} catch (e) {
		res.status(401).json({ message: "Not authorized" });
	}
};
