//var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

//var Zombie = require('./Zombie


describe('Item', function() {
  it('should be a function', function() {
    expect(Item).to.be.a('function');
  });

  it('should have a item name', function() {
    var torch = new Item('Torch');
    torch.name.should.equal('Torch');
  });

}); // End Item specs

describe('Weapon', function() {

  var gun;

  beforeEach(function() {
    gun = new Weapon('Flame Thrower', 100);
  });

  it('should be a function', function() {
    expect(Weapon).to.be.a('function');
  });

  it('should be an instance of weapon', function() {
    gun.should.be.an.instanceof(Weapon);
  });

  it('should have a weapon name', function() {
    gun.should.have.property('name');
    gun.name.should.equal('Flame Thrower');
  });

  it('should have a property and value, damage', function() {
    gun.should.have.property('damage');
    gun.damage.should.equal(100);
  });

}); // End Weapon specs

describe('Food', function() {

  var newFood;

  beforeEach(function() {
    newFood = new Food('Pizza', 50);
  });

  it('should be a function', function() {
    expect(Food).to.be.a('function');
  });

  it('should have a name and energy property', function() {
    newFood.should.have.property('name');
    newFood.should.have.property('energy');
  });

  it('should have name and energy values', function() {
    newFood.name.should.equal('Pizza');
    newFood.energy.should.equal(50);
  });

  it('should have a prototype', function() {
    newFood.should.be.an.instanceof(Item);
  });

}); // End Food specs

describe('Player', function() {

  var newPlayer;

  beforeEach(function() {
    newPlayer  = new Player('Ducky', 100, 50, 30);
  });

  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should have a name property', function() {
    newPlayer.should.have.property('name');
  });

  it('should have a health property', function() {
    newPlayer.should.have.property('health');
  });

  it('should have a strength property', function() {
    newPlayer.should.have.property('strength');
  });

  it('should have a speed property', function() {
    newPlayer.should.have.property('speed');
  });

}); // End player specs
