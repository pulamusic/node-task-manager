require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5d7118bfe5fb76052d208840').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false})
// }).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5d725e3ece3a2c04443da884')
  .then((count) => {
    console.log(count)
  }).catch((error) => {
    console.log(error)
  })
