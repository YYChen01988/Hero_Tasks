// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

const Task = function(difficulty, urgency, reward, status){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}



// Task.prototype.getDifficulty = function(){
//   return this.difficulty;
// }
//
// Task.prototype.getUrgency = function(){
//   return this.urgency;
// }
//
// Task.prototype.getReward = function(){
//   return this.reward;
// }

Task.prototype.compelete = function(){
  this.status = "compelete";
}





module.exports = Task;
