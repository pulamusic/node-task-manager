const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manage-api', {
  useNewURLParser: true,
  useCreateIndex: true
})

// Create a new user in users collection
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Please do not use the word "password" in your password.')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number.')
      }
    }
  }
})

// const me = new User({
//   name: 'Jim',
//   email: 'jim@pulamusic.com',
//   password: '123'
// })
//
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error: ', error)
// })

// Create a new task in the tasks collection
const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const taskOne = new Task({
  description: 'Read a book',
  completed: true
})

taskOne.save().then(() => {
  console.log(taskOne)
}).catch((error) => {
  console.log('Error:', error)
})
