const { Brand, Device } = require("../models/models");

class BrandController {
	async create(req, res) {
		const { name } = req.body;
		const brand = await Brand.create({ name });
		return res.json(brand);
	}

	async getAll(req, res) {
		const brands = await Brand.findAll();
		return res.json(brands);
	}

	async delete(req, res) {
		try {
			const { id } = req.params;

			const brand = await Brand.findOne({ where: { id } });
			await brand.destroy();

			return res.json(brand);
		} catch (e) {
			res.json({ message: e.message });
			console.log(e);
		}
	}
}

module.exports = new BrandController();
