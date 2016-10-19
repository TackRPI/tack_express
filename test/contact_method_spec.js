const chai = require('chai');
const expect = chai.expect;
const ContactMethod = require('../models/ContactMethod');

describe('ContactMethod', () => {
  it('should create a new ContactMethod', (done) => {
    const contactMethod = new ContactMethod({
      pref: true
    });

    contactMethod.save((err) => {
      expect(err).to.be.null;
      expect(contactMethod.pref).to.equal(true);
      expect(contactMethod).to.have.property('createdAt');
      expect(contactMethod).to.have.property('updatedAt');
      done();
    });
  });

});
