
const getContacts = (req, res) => {
    res.json({ message: "get all contacts" });
}

const getContact = (req, res) => {
    res.json({ message: `get contact by id ${req.params.id}` });
}
const createContact = (req, res) => {
    res.json({ message: "create new contact" });

}
const updateContact = (req, res) => {
    res.json({ message: `update contact by id ${req.params.id}` });
}   
const deleteContact = (req, res) => {
    res.json({ message: `delete contact by id ${req.params.id}` });

}
module.expports = {
    getContacts, 
    getContact,
    createContact,
    updateContact,
    deleteContact
}