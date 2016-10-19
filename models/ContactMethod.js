const mongoose = require('mongoose');

const contactMethodSchema = new mongoose.Schema({
  pref: { type: Boolean, default: false }
}, { timestamps: true });

const ContactMethod = mongoose.model('ContactMethod', contactMethodSchema);

module.exports = ContactMethod;
