const mongoose = require('mongoose')

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

module.exports = Task
