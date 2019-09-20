const express = require('express')
const multer = require('multer')

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

// configuring multer for uploading files
const upload = multer({
  dest: 'images',
  limits: {
    // set in bytes, so 2000000 = 2MB
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/g)) {
      return cb(new Error('Please upload a Word document only.'))
    }
    cb(undefined, true)
  }
})

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
})

// connect to server
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
