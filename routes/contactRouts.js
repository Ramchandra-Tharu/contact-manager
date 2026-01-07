const express = require('express');
const router = express.Router();

router.get('/contacts', (req,) =>{
    res.json({message:"get all contacts"})
})
router.po