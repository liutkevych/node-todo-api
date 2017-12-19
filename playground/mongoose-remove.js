const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');


var id = '5a327f577d9e733f92585357';

// Todo.findOneAndRemove
Todo.findOneAndRemove(_id: '5a350b3ced043d00147607b8').then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5a350b3ced043d00147607b8').then((todo) => {
  console.log(todo);
});
