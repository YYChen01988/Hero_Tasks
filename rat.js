// Create a constructor to create Rat objects.
// Rats should be able to touch food, if they do the food becomes poisonous.
// Heroes that eat poisonous food should lose health.

const Rat = function(){
}
Rat.prototype.poisonFood = function(food){
  food.poisonous = true;
}


module.exports = Rat;
