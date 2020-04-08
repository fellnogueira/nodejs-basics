const mongoose = require('mongoose');
const product = mongoose.model('product');

module.exports = {
    async index(req, res) {
        const obj = await product.find();
        return res.json(obj);
    },
    async store(req, res) {
        const obj = await product.create(req.body);
        return res.json(obj);
    },
    async show(req, res) {
        const obj = await product.findById(req.params.id);
        return res.json(obj);
    },
    async update(req, res) {
        const obj = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(obj);
    },
    async destroy(req, res) {
        await product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};
