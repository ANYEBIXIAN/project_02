const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

const router = require('./router')

app.use('/user', router)



app.listen('80', console.log('server up !'))
