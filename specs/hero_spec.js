const assert = require("assert");
const Hero = require('../hero.js');
const Food = require('../food.js')
const Task = require('../task.js')
const Rat = require('../rat.js')

let hero;

describe('Hero', function(){
  beforeEach(function(){

    rat1 = new Rat(10)

    task1 = new Task(20, 80, 556, 'incomplete')
    task2 = new Task(50, 40, 688, 'incomplete')
    task3 = new Task(56, 73, 856, 'complete')

    apple = new Food('Apple', 15)
    banana = new Food('Banana', 20)
    orange = new Food('Orange', 10)

    hero = new Hero('Clark Kent', 80, 'Banana')
  });

it("shows hero name", function(){
  const actual = hero.heroName();
  assert.strictEqual(actual, 'Clark Kent');
});

it("shows hero health", function(){
  const actual = hero.heroHealth();
  assert.strictEqual(actual, 80);
});

it("shows hero favourite food", function(){
  const actual = hero.heroFavFood();
  assert.strictEqual(actual, 'Banana');
});


it("Greet", function(){
  const actual = hero.greet();
  assert.strictEqual(actual, 'Hello, I am Clark Kent');
});

it('Health + favfood replenishment', function(){
  hero.eatFood(banana);
  const actual =hero.health
  assert.strictEqual(actual, 110);
});

it('Health + food replenishment', function(){
  hero.eatFood(apple);
  const actual =hero.health
  assert.strictEqual(actual, 95);
});

it('Health + poisonous food replenishment', function(){
  rat1.poisonFood(orange);
  hero.eatFood(orange);
  const actual =hero.health
  assert.strictEqual(actual, 70);
});

it('count the number of tasks', function(){
  const actual = hero.countTasks();
  assert.strictEqual(actual, 0);
});

it('add new task', function(){
  hero.addTask(task1);
  const actual = hero.countTasks();
  assert.strictEqual(actual, 1);
});


// it('sssssssort tasks by difficulty', function(){
//   hero.addTask(task2);
//   hero.addTask(task1);
//   hero.addTask(task3);
//   hero.sortTask('difficulty');
//   assert.strictEqual(hero.tasks, [task1, task2, task3]);
// });
//


it('sort tasks by difficulty', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  hero.sortTaskByDifficulty();
  const actual = hero.tasks[0].difficulty;
  assert.strictEqual(actual, 20);
});

it('sort tasks by urgency', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  hero.sortTaskByUrgency();
  const actual = hero.tasks[0].urgency;
  assert.deepStrictEqual(actual, 40);
});

it('sort tasks by reward', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  hero.sortTaskByReward();
  const actual = hero.tasks[0].reward;
  assert.deepStrictEqual(actual, 556 );
});

it('view tasks status', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  var incomplete = hero.viewTaskStatus(false)
  const actual = incomplete.length;
  assert.deepStrictEqual(actual, 2);
});

it('view compelete tasks', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  actual = hero.getCompleteTasks();
  assert.deepStrictEqual(actual, [task3]);
});

it('view incompelete tasks', function(){
  hero.addTask(task2);
  hero.addTask(task1);
  hero.addTask(task3);
  actual = hero.getIncompleteTasks();
  assert.deepStrictEqual(actual, [task2, task1]);
});

});
