const express = require("express");
const router = express.Router();
router.use(express.json());
const crypt = require('../model/crypt')


router.post("/add", async (req, res) => {

    try {

        let lists = req.body;
        // console.log(req.body)
        const data = await crypt.deleteMany()
        const datas = await crypt.create(lists)
        res.json({ message: "success" });

    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/", async (req, res) => {

    try {

        const datas = await crypt.find()
        res.json(datas);

    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;