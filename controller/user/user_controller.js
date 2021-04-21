const {userService} = require('../../service');


module.exports = {
    findAll: async (req, res) => {
        try {
          const {limit = 10, page = 1, ...where} = req.query;
          const offset = limit * (page-1);

          const  users = await userService.selectAllUsers(where, +limit, +offset);

          res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    findById: async (req, res) => {
        try{
         res.json(req.user);
        }catch (e){
         res.status(400).json(e.message);
        }

    },

    createUser: async (req, res) => {
        try{
            await userService.inspectUser(req.body);

            res.sendStatus(201);
        }catch (e){
            res.status(400).json(e.message);
        }

    }
}