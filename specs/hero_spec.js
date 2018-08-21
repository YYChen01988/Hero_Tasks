const assert = require("assert");
const Hero = require('../hero.js');
const Food = require('../food.js')
const Task = require('../task.js')
const Rat = require('../rat.js')

describe('Hero', function(){
  beforeEach(function(){

    rat1 = new Rat(10)
    
    task1 = new Task(20, 80, 556, 'incomplete')
    task2 = new Task(50, 40, 688, 'incomplete')
    task3 = new Task(56, 73, 856, 'complete')

    apple = new Food('Apple', 15)
    banana = new Food('Banana', 20)

    hero = new Hero('Clark Kent', 80, 'Banana')
  });

it("Greet", function(){
  const actual = hero.greet();
  assert.strictEqual(actual, 'Hello, I am Clark Kent');
})

it('Health + food replenishment', function(){
  hero.food_replenishment(banana);
  const actual =hero.health
  assert.strictEqual(actual, 110);
})

it('Health + food replenishment', function(){
  hero.food_replenishment(apple);
  const actual =hero.health
  assert.strictEqual(actual, 95);
})

it('count the number of tasks', function(){
  const actual = hero.countTasks();
  assert.strictEqual(actual, 0);
})

it('add new task', function(){
  hero.addTask(task1);
  const actual = hero.countTasks();
  assert.strictEqual(actual, 1);
})

it('sort tasks by difficulty', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);

  hero.sortTaskByDifficulty();
  const actual = hero.tasks[0].difficulty;
  assert.strictEqual(actual, 20);
})

it('sort tasks by urgency', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);

  hero.sortTaskByUrgency();
  const actual = hero.tasks[0].urgency;
  assert.strictEqual(actual, 40);
})

it('sort tasks by reward', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);

  hero.sortTaskByReward();
  const actual = hero.tasks[0].reward;
  assert.strictEqual(actual, 556 );
})

it('view tasks status', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  var incomplete = hero.viewTaskStatus(false)
  const actual = incomplete.length;
  assert.strictEqual(actual, 2);
})


})
