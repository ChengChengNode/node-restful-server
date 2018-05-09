const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.status(200).send(doc);
  },(err) => {
    res.status(400).send(err);
  })
});

app.get('/todos',(req, res) => {
  Todo.find().then((todos) => {
    res.status(200).send({todos});
  },(e) => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});





// let mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
//
// //save new something.
// let Todo = mongoose.model('Todo',{
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: String
//   }
// });
//
// // let newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
// let newTodo = new Todo({
//   text: 'buy some books',
//   completed: true,
//   completedAt: new Date().toISOString().slice(0,10)
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// },(err) => {
//   console.log('Unable to save todo');
// });

module.exports = { app }
