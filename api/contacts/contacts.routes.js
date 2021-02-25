  
const { Router } = require('express')

const ContactsController = require('./contacts.controller')
const { validateContactId } = require('./contacts-validation');

const contactsRouter = Router()

contactsRouter.get("/contacts", ContactsController.getContacts)
contactsRouter.get("/contacts/:contactId", validateContactId, ContactsController.getContactById)
contactsRouter.post("/contacts", ContactsController.validateCreateContact, ContactsController.createContact)
contactsRouter.patch("/contacts/:contactId", validateContactId, ContactsController.validateUpdateContact, ContactsController.updateContact)
contactsRouter.delete("/contacts/:contactId", validateContactId, ContactsController.deleteContact)



module.exports = contactsRouter