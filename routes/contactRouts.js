const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "get all contacts" })
});
// router.get('/', (req, res) => {
//     const contactID = req.params.id;
//     const contact = contacts.find (c => c.id === contactID);
//     res.json(contact);
// })
router.get("/:id", (req, res) => {
    res.json({ message: `get contact by id ${req.params.id}` })
})
router.post("/", (req, res) => {
    res.json({ message: "create new contact" })
});

router.put('/:id', (req, res) => {
    res.json({ message: `update contact by id ${req.params.id}` })
});
router.delete('/:id', (req, res) => {
    res.json({ message: `delete contact by id ${req.params.id}` })
})

module.exports = router;