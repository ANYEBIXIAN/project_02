const express = require('express')

const router = express.Router()

router.get('/get',(req,res)=>{

    const query = req.query

    res.send(query)

})

module.exports = router


