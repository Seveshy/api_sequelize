const { Op } = require('sequelize');
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        /** Encontrar todos usuários que tem email que termina com @ loading.com.br
         * Desses usuários eu quero buscar todos que moram na rua "Rua das Neves"
         * Desses usuários eu quero buscar as tecnologias que começam com React
        */

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@loading.com.br' 
                }
            },

            include: [ 
                { association: 'adresses', where: { street: 'Rua das Neves' } }, // endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'Reactjs%'
                        }
                    }
                },
            ]
        })

        return res.json(users);
    }   
};