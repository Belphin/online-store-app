const { Type, Device } = require("../models/models");

class TypeController {
	async create(req, res) {
		const { name } = req.body;
		const type = await Type.create({ name });
		return res.json(type);
	}

	async getAll(req, res) {
		const types = await Type.findAll();
		return res.json(types);
	}

	async delete(req, res) {
		try {
			const { id } = req.params;

			const type = await Type.findOne({ where: { id } });
			await type.destroy();

			return res.json(type);
		} catch (e) {
			res.json({ message: e.message });
			console.log(e);
		}
	}
}

module.exports = new TypeController();
