const mongoose = require('mongoose');

const emailAddressSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return /.{1,}@.{1,}\..{1,}/.test(v);
      },
      message: '{VALUE} is not a valid email address!'
    },
    required: [true, 'Email address required!']
  }
}, { timestamps: true });

const EmailAddress = mongoose.model('EmailAddress', emailAddressSchema);

module.exports = EmailAddress;
