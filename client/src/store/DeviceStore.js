import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: "type 1" },
			{ id: 2, name: "type 2" },
			{ id: 3, name: "type 3" },
		];
		this._brands = [
			{ id: 1, name: "brand 1" },
			{ id: 2, name: "brand 2" },
			{ id: 3, name: "brand 3" },
		];
		this._devices = [
			{ id: 1, name: "name", img: "adsf", rating: 5 },
			{ id: 2, name: "name", img: "adsf", rating: 5 },
			{ id: 3, name: "name", img: "adsf", rating: 5 },
			{ id: 4, name: "name", img: "adsf", rating: 5 },
			{ id: 5, name: "name", img: "adsf", rating: 5 },
		];
		this._selectedType = {};
		this._selectedBrand = {};
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}
	setBrands(brands) {
		this._brands = brands;
	}
	setDevices(devices) {
		this._devices = devices;
	}
	setSelectedType(type) {
		this._selectedType = type;
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand;
	}

	get types() {
		return this._types;
	}
	get brands() {
		return this._brands;
	}
	get devices() {
		return this._devices;
	}
	get selectedType() {
		return this._selectedType;
	}
	get selectedBrand() {
		return this._selectedBrand;
	}
}
