const assert = require("assert");
const Task = require('../task.js');

describe('Task', function(){
  beforeEach(function(){
    task = new Task(20, 80, 556, 'incomplete')
  });



it("shows task difficulty", function(){
  const actual = task.difficulty
  assert.strictEqual(actual, 20);
});

it("shows task urgency", function(){
  const actual = task.urgency
  assert.strictEqual(actual, 80);
});

it("shows task reward", function(){
  const actual = task.reward
  assert.strictEqual(actual, 556);
});

it("marks when task is compelete", function(){
  task.compelete();
  const actual = task.status
  assert.strictEqual(actual, 'compelete');
});




});
