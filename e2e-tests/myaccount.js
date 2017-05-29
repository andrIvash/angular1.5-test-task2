'use strict';
const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('My Angular App: /myaccount', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000/#!/myaccount');
    const email = element(by.model('vm.newUser.email'));
    email.sendKeys('myemail@myemail.com');
  });

  it('- should automatically redirect to /myaccount when location /#!/myaccount', function() {
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/myaccount');
  });

  it("- should display form on the /myaccount page", function() {
    const form = element(by.id("myForm"));
    expect(form.isPresent()).to.eventually.equal(true);
  });

  it('- required email field in the form', function() {
    expect(element(by.model('vm.newUser.email')).getAttribute('required')).to.eventually.equal('true');
  });

  it('- required email field should be filled', function() {
    const email = element(by.model('vm.newUser.email'));
    email.getAttribute('value').then(function(value) {
      //console.log(value);
      expect(value).to.have.lengthOf.at.least(3);
    });
  });


});
