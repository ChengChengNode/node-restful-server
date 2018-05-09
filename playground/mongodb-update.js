const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5af27ff0fca0709217fc0190')
  // },{
  //   $set: {
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(results)
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af26bda16bc64a1d6353b3d')
  },{
    $set: {
      name: 'Tian Ma'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  client.close();

});
