const assert = require("assert");
const Food = require('../food.js');

describe('Food', function(){
  beforeEach(function(){
    food = new Food('Banana', 80)
  });

  it("shows the food replenishment value ", function(){
    const actual =food.replenishment;
    assert.strictEqual(actual, 80);
  });

  it("shows the food name", function(){
    const actual =food.foodName;
    assert.strictEqual(actual, 'Banana');
  });



})
