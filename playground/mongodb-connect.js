// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
// let user = {name: 'Alen', age: 25};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  db.collection('Todos').find({
    _id: new ObjectID("5af26e9cfca0709217fc0001"),
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Users').insertOne({
  //   name: 'Alen Cheng',
  //   age: 27,
  //   location: '6041 Village Bend Dr Apt 0506',
  //   phone: '214-400-2879',
  // },(err, result) =>{
  //   if (err)
  //   {
  //     return console.log('Unable to insert user', err)
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // client.close();
});
// MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
//   if (err)
//   {
//     return console.log('Unable to connect to MongoDB server.');
//   }
//   console.log('Connected to MongoDB server.');
//   const db = client.db('Users');
//
//   db.collection('Users').insertOne({
//     name: 'Alen Cheng',
//     age: 27,
//     location: '6041 Village Bend Dr Apt 0506',
//     phone: '214-400-2879',
//   },(err, result) =>{
//     if (err)
//     {
//       return console.log('Unable to insert user', err)
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
//   client.close();
// });
