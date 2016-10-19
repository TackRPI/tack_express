const chai = require('chai');
const expect = chai.expect;
const Address = require('../models/Address');

describe('Address', () => {
  it('should create a new Address', (done) => {
    const address = new Address({
      streetAddress: '123 Main St.',
      locality: 'Bellmore',
      region: 'NY',
      postalCode: 11710,
      country: 'United States'
    });

    address.save((err) => {
      expect(err).to.be.null;
      expect(address.formatted).to.equal('123 Main St.\nBellmore, NY 11710\nUnited States');
      expect(address.streetAddress).to.equal('123 Main St.');
      expect(address.locality).to.equal('Bellmore');
      expect(address.region).to.equal('NY');
      expect(address.postalCode).to.equal(11710);
      expect(address.country).to.equal('United States');
      expect(address).to.have.property('createdAt');
      expect(address).to.have.property('updatedAt');
      done();
    });
  });

});
