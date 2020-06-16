const User = require('../models/User');

module.exports = {
    /** Rota para listar todos os usuários */  
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },   

    async store(req, res) {
        /** Rota para criar um usuário */
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    },

    async delete(req, res) {

    }
};