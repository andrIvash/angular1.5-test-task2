'use strict';
const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('My Angular App: Pokemons', function() {

  it('- should add pokemon', function() {
    browser.get('http://localhost:8000/#!/new');
    element(by.model('vm.newPokemon.name')).sendKeys('one');
    element(by.model('vm.newPokemon.weight')).sendKeys('12');
    element(by.id('addNew')).click();
    expect(element(by.id('result')).getText()).to.eventually.equal('Pokemon Add');
  });

  it('- should show full list of pokemons', function() {
    browser.get('http://localhost:8000/#!/list');
    var pokemons = element.all(by.repeater('singlePokemon in vm.pokemons'));
    expect(pokemons.count()).to.eventually.equal(835)
  });

});
