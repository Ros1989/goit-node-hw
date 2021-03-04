  
const { Router } = require('express')

const ContactsController = require('./contacts.controller')
const { validateContactId } = require('./contacts-validation');

const contactsRouter = Router()

contactsRouter.get("/", ContactsController.getContacts)
contactsRouter.get("/:contactId", validateContactId, ContactsController.getContactById)
contactsRouter.post("/", ContactsController.validateCreateContact, ContactsController.createContact)
contactsRouter.patch("/:contactId", validateContactId, ContactsController.validateUpdateContact, ContactsController.updateContact)
contactsRouter.delete("/:contactId", validateContactId, ContactsController.deleteContact)



module.exports = contactsRouter