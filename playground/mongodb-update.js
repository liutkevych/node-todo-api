
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a324e4addaebeff2970a77a')
  // }, {
  //   $set: {
  //     comleted: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a3261dfddaebeff2970b2a9')
  },{
    $set: {
      name: 'Alex'
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  db.close();
});
