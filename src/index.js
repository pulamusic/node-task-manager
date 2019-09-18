const express = require('express')

// require local DB
require('./db/mongoose')

// Require routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Set up express and ports
const app = express()
const port = process.env.PORT || 3000

// register routers
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// connect to server
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})

// // =====================================
//
// const Task = require('./models/task')
// const User = require('./models/user')
//
// const main = async () => {
//   // const task = await Task.findById('5d80fa8e9686190b5e68b886')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)
//
//   const user = await User.findById('5d80f96ac7d3d40b1b329422')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }
//
// main()
