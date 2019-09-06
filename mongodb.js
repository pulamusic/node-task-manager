// CRUD: Create, Read, Update, Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database.')
  }

  const db = client.db(databaseName)

  db.collection('tasks').deleteOne({
    description: 'Get lunch'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  // db.collection('users').deleteMany({
  //   age: 55
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // const updatePromise = db.collection('users').updateOne({
  //   _id: new ObjectID('5d6fc9293163e1071dd8aaf3')
  // },{
  //   $inc: {
  //     age: 1
  //   }
  //   // $set: {
  //   //   name: 'Francis'
  //   // }
  // })
  //
  // updatePromise.then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
})
