
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'To eate my lanch'}).then((result) => {
  //   console.log(result);
  // })

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({comleted: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Oleksandr'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a3235233610b00ce3dd03e4")}).then((res) => {
    console.log(res);
  })



  db.close();
});
