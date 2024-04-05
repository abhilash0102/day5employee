const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abhilashsanthosh6:abhilash@cluster0.tawp4dc.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const EmployeeSchema = new mongoschema({
    ename:String,
    eage:Number,
    epostion:String,
    esalary:Number
})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel