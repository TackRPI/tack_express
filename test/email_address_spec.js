const chai = require('chai');
const expect = chai.expect;
const EmailAddress = require('../models/EmailAddress');

describe('EmailAddress', () => {
  it('should create a new EmailAddress', (done) => {
    const emailAddress = new EmailAddress({
      email: 'test@email.com'
    });

    emailAddress.save((err) => {
      expect(err).to.be.null;
      expect(emailAddress.email).to.exist;
      expect(emailAddress.email).to.equal('test@email.com');
      expect(emailAddress).to.have.property('createdAt');
      expect(emailAddress).to.have.property('updatedAt');
      done();
    });
  });

});
