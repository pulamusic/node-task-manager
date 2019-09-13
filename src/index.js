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
