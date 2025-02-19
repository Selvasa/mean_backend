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

router.get('/users', async function (req, res) {
    try {
        let result = await CrudPost.find();
        return res.status(200).json({ message: "fetching user successfully", data: result })
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err })
    }
})

router.put('/update_user/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log(req.body);
        
        let result = await CrudPost.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json({ message: "Updated SuccessFully", data: result })
    }
    catch (err) {
        res.status(500).json({ message: "Error Uptating User", error: err })
    }

})
router.get('/user/:id', async function (req, res) {
    try {
        let result = await CrudPost.findById(req.params.id);
        if (result) {
            return res.status(200).json({ message: "Fetching single user", data: result })
        }
        else {
            return res.status(404).json({ message: "user not found" })
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Error Fetching user", error: err })
    }
})
router.delete('/delete_user/:id', async function (req, res) {
    let result = await CrudPost.findByIdAndDelete(req.params.id);
    try {
        if (result) {
            return res.status(200).json({ message: "Deleted successfully", data: result })
        }
        else {
            res.status(404).json({ message: "user not found" })
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Error Fetching user", error: err })
    }
})
module.exports = router;

