const { userService } = require('../../service');

module.exports = {
    checkIsUserRegisteredById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.selectById(id);

            if (!user){
                throw new Error('User is not present');
            }
            req.user = user;
            next();
        }catch (e){
            res.status(400).json(e.message);
        }
    }
}

