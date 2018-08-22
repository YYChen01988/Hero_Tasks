const assert = require("assert");
const Food = require('../food.js');
const Rat = require('../rat.js');


describe('Rat', function(){
  beforeEach(function(){
    food = new Food('Banana', 80)
    rat = new Rat()
  });

  it("shows the food is poison ", function(){
    rat.poisonFood(food);
    const actual =food.poisonous;
    assert.strictEqual(actual, true);
  });




});
