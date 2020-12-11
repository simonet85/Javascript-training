const express = require('express')
const bodyparser = require('body-parser')
const app = express()
// const port = 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use((req, res)=>{
    res.setHeader('Content-Type', 'text/plain')
    res.write('You posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
// app.get('/', (req, res)=>res.send())
// app.listen(port, ()=> console.log('Example app listening on port 3000'))