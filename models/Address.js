const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  formatted: {
    type: String
  },
  streetAddress: {
    type: String,
    required: [true, 'Street address required!']
  },
  locality: {
    type: String,
    required: [true, 'City required!']
  },
  region: {
    type: String,
    required: [true, 'State required!']
  },
  postalCode: {
    type: Number,
    required: [true, 'Postal Code required!']
  },
  country: {
    type: String,
    required: [true, 'Country required!']
  }
}, { timestamps: true });

addressSchema.pre('save', function(next) {
  this.formatted = `${this.streetAddress}\n${this.locality}, ${this.region} ${this.postalCode}\n${this.country}`;
  next();
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
