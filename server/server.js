const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const port = 5001
app.use(bodyparser.json({ limit: '10mb' }));
app.use(cors())

mongo.connect('mongodb://127.0.0.1:27017/studdb1')
.then((()=>{console.log("connected to DB")}))

const userSchema= new mongo.Schema({
  name:String,
  sport:String,
  mobile:Number,
  image:String
})

const User = mongo.model('Bb',userSchema)

app.get('/users',(req,res)=>{
    User.find()
    .then((users)=>{
      res.send(users)
    })
})

app.post('/users',(req,res)=>{
  const user  = new User(req.body);
  user.save()
  .then(()=>{
    res.send(user);
    console.log(user,"Added User");
  })
})

app.listen(port, () => {
    console.log(`server running`)
  })

 

  
 
