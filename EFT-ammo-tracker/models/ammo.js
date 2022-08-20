const mongoose = require('mongoose');

const ammoSchema = new mongoose.Schema({
    caliber: {type: String, required: true},
    cartridge: {type: String, required: true},
    damage: {type: Number, required: true},
    penpower: {type: Number, required: true},
    velocity: {type: Number, required: true},
    fragmentation: Number,
    img: String,
    description: String,
    purchasable: Boolean
});

const Ammo = mongoose.model('Ammo', ammoSchema);

module.exports = Ammo;