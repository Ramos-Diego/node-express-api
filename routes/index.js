const express = require('express')
const router = express.Router()

// -------------- GET ROUTE ----------------
router.get('/', (req, res) => res.status(200).json({"msg": "Hello world!"}))

// -------------- POST ROUTE----------------
router.post('/', (req, res) => res.status(200).json(req.body))

module.exports = router
