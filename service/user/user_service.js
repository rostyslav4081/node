const db = require('../../dataBase').getInstance();

module.exports = {
    selectAllUsers: (where= {}, limit = 10, offset = 0) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');

        return User.findAll({
            where,
            limit,
            include: [{model: Car, required: false}],
            offset
        });
    },

    selectById: (userId) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');

        return User.findByPk(userId, {include: Car});
    },

    inspectUser:(user) => {
        const User = db.getModel('User');

        return User.create(user);
    }
}