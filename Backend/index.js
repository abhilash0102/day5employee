// 1.importing the express
const express = require('express')
const employeeModel = require("./model")
const cors =require('cors')
// 2.initalization
const app =express()
// middelwere || passing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
// 3.api creation
app.get('/',(req,res)=>{
    res.send("this messege is from server")
})
app.get('/abhilash',(req,res)=>{
    res.send("I am abhilash")
})
app.get('/wait',(req,res)=>{
    res.send("hello")
})
app.get('/data',(req,res)=>{
    res.json({"name":"abhilash","age":12})
})
//  api for adding data
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("data added")

})
// api viewing data
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})
// api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    var params
    console.log(req,params)
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("deleted") 
})
app.put('/edit/:id',async(req,res)=>{
    var params
    console.log(req,params)
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")
})
// 4.port
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})