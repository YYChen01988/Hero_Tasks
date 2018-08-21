// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

const Hero = function(name, health, favFood, foods){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.greet = function(){
  return`Hello, I am ${this.name}`;
}


Hero.prototype.food_replenishment = function(food){
  var factor = this.favFood == food.get_food_name() ? 1.5 : 1.0 
  this.health += food.replenishment*factor
}


Hero.prototype.countTasks = function(){
  return this.tasks.length;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTaskByDifficulty = function(){
  this.tasks.sort(function(a, b){
    return a.difficulty-b.difficulty
})
}

Hero.prototype.sortTaskByUrgency = function(){
  this.tasks.sort(function(a, b){
    return a.urgency-b.urgency
})
}

Hero.prototype.sortTaskByReward = function(){
  this.tasks.sort(function(a, b){
    return a.reward-b.reward
})
}

Hero.prototype.viewTaskStatus = function(return_complete = true){

  var incomplete =[]
  var complete = []
  for ( var task_index in this.tasks){

    var task = this.tasks[task_index];

    if (task.status == 'incomplete'){
      incomplete.push(task)
    }
    else{
      complete.push(task)
    }
  }
  if (return_complete) {
    return complete;
  }
  else{
    return incomplete;
  }
}









module.exports = Hero;
