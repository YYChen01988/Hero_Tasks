// Food should have a name
// Food should have a replenishment value

const Food = function(foodName, replenishment){
  this.foodName = foodName;
  this.replenishment = replenishment;
}


Food.prototype.get_replenishment = function(){
  return this.replenishment
}
Food.prototype.get_food_name = function(){
  return this.foodName
}




module.exports = Food;
