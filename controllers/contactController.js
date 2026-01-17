const asyncHandler = require("express-async-handler");
const getContacts = asyncHandler(async (req, res) => {
    res.json({ message: "get all contacts" });
})

const getContact = asyncHandler(async (req, res) => {
    res.json({ message: `get contact by  sirzan id ${req.params.id}` });
})
const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is : ", req.body);
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.json({ message: "successfully created" });

});
const updateContact = asyncHandler(async (req, res) => {
    res.json({ message: `update contact by id ${req.params.id}` });
});
const deleteContact = asyncHandler(async (req, res) => {
    res.json({ message: `delete contact by id ${req.params.id}` });

});
module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}