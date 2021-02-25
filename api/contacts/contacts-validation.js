const {Types: { ObjectId }} = require('mongoose');


function validateContactId(req, res, next) {
  const {
    params: { contactId },
  } = req;
  ObjectId.isValid(contactId) ? next() : res.status(400).send();
}

module.exports = {
  validateContactId
};