import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	constructor() {
		this._types = [];
		this._brands = [];
		this._devices = [];
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

	get types() {
		return this._types;
	}
	get brands() {
		return this._brands;
	}
	get devices() {
		return this._devices;
	}
}
