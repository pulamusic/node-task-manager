const express = require('express')

require('./db/mongoose')

// Require models
const User = require('./models/user')
const Task = require('./models/task')

// Set up express and ports
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Create users
app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.save().then(() => {
    res.send(user)
  }).catch((error) => {
    res.status(400)
    res.send(error)
  })
})

// Read users
app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch((error) => {
    res.status(500).send()
  })
})

// Get user by id
app.get('/users/:id', (req, res) => {
  const _id = req.params.id
  User.findById(_id).then((user) => {
    // if user not found
    if (!user) {
      return res.status(404).send()
    }
    // success
    res.send(user)
  }).catch((error) => {
    res.status(500).send()
  })
})

// Create tasks
app.post('/tasks', (req, res) => {
  const task = new Task(req.body)
  task.save().then(() => {
    res.send(task)
  }).catch((error) => {
    res.status(400)
    res.send(error)
  })
})

// Read tasks
app.get('/tasks', (req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks)
  }).catch((error) => {
    res.status(500).send()
  })
})

// Read task by id
app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id).then((task) => {
    // if task not found
    if (!task) {
      return res.status(404).send()
    }
    // success
    res.send(task)
  }).catch((error) => {
    res.status(500).send()
  })
})

// connect to server
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
