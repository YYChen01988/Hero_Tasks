const assert = require("assert");
const Task = require('../task.js');

describe('Task', function(){
  beforeEach(function(){
    task = new Task(20, 80, 556, 'incomplete')
  });

it("marks when task is compelete", function(){
  task.compelete();
  const actual = task.status
  assert.strictEqual(actual, 'compelete');
});


})
