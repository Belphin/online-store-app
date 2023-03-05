const ApiError = require("../error/ApiError");

class UserController {
	async registration(req, res) {
		try {
		} catch (e) {}
	}
	async login(req, res) {
		try {
		} catch (e) {}
	}
	async check(req, res, next) {
		try {
			const { id } = req.query;
			if (!id) {
				return next(ApiError.badRequest("id not set"));
			}
			res.json(id);
		} catch (e) {}
	}
}

module.exports = new UserController();
