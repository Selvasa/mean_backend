const express = require('express');
const CrudPost = require('../db/curd');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        let { name, age, city, address, phone } = req.body;
        let result = await new CrudPost({ name, age, address, city, phone }).save();
        return res.status(201).json({ messsage: "created success fully", data: result })
    }
    catch (err) {
        res.status(500).json({ message: "Error creating post", error: err })
    }
})
module.exports = router;

