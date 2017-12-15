const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5a327f577d9e733f92585357';

User.find({
  _id: id
}).then((res) => {
  console.log('Users', res);
});

User.findOne({
  _id: id
}).then((res) => {
  console.log('User', res);
});

User.findById(id).then((user) => {
  if (!user) {
    console.log('Unable to find this user.');
  }
  console.log('User by Id', user);
}).catch((err) => console.log(err));
