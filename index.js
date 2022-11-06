const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())

const cryptRouter = require('./routes/cryptRoute')
const bodyparser = require("body-parser");

mongoose.connect('mongodb+srv://sudhirchoudhary410:sudhir410@startup.a101qex.mongodb.net/Crypt?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database connected')
    }
})
app.use(express.json())
app.use('/', cryptRouter)



app.listen(8000, () => { console.log(`server started on port : http://localhost:8000/`) })
