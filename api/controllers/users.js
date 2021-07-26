const Users = require('../models/Users');

async function create (req, res) {
    try {
        const user = await Users.create(req.body);
        res.status(201).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function destroy (req, res) {
    try {
        const user = await Users.id(req.params.id);
        const resp = await user.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}


module.exports = { create, destroy }