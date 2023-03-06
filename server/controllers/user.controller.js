const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) =>
	jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: "24h",
	});

class UserController {
	async registration(req, res, next) {
		const { email, password, role } = req.body;
		if (!email || !password) {
			return next(ApiError.badRequest("Invalid email or password"));
		}
		const candidate = await User.findOne({ where: { email } });
		if (candidate) {
			return next(ApiError.badRequest("Email already registered"));
		}
		const hashPassword = bcrypt.hashSync(password, 5);
		const user = await User.create({ email, password: hashPassword, role });
		await Basket.create({ userId: user.id });
		const token = generateJwt(user.id, user.email, user.role);
		return res.json({ token });
	}

	async login(req, res, next) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return next(ApiError.badRequest("Invalid email or password"));
		}
		const comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(ApiError.badRequest("Invalid email or password"));
		}
		const token = generateJwt(user.id, user.email, user.role);
		return res.json({ token });
	}

	async check(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.uesr.role);
		return res.json({ token });
	}
}

module.exports = new UserController();
