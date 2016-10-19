const chai = require('chai');
const expect = chai.expect;
const PhoneNumber = require('../models/PhoneNumber');

describe('PhoneNumber', () => {
  it('should create a new PhoneNumber', (done) => {
    const phoneNumber = new PhoneNumber({
      phone: '516-555-0123'
    });

    phoneNumber.save((err) => {
      expect(err).to.be.null;
      expect(phoneNumber.phone).to.exist;
      expect(phoneNumber.phone).to.equal('516-555-0123');
      expect(phoneNumber).to.have.property('createdAt');
      expect(phoneNumber).to.have.property('updatedAt');
      done();
    });
  });

});
