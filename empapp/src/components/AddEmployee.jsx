import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddEmployee = () => {
    var [inputs,setInputs] = useState({
        ename:"",
        eage: "",
        epostion:"",
        esalary:""
    })
    const inputHandeler =(e) =>{
        const {name,value}=e.target
        setInputs((prevdata)=>({...prevdata,[name]:value}))
        console.log(inputs)
    }
    const addHandler =()=> {
        console.log("button clicked");
        axios.post("http://localhost:3005/create",inputs)
        .then((responce)=>{
            console.log(responce.data)
            alert(responce.data)
        })
    .catch((err)=>console.log(err))
    }
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4'>
            Add Employee form
        </Typography>
        <br/><br/>
        <TextField label='Employee Name' variant='outlined'  name='ename' value={inputs.ename} onChange={inputHandeler}/><br/><br/>
        <TextField label='Employee Age' variant='outlined'  name='eage' value={inputs.eage} onChange={inputHandeler}/><br/><br/>
        <TextField label='Employee position' variant='outlined'  name='epostion' value={inputs.epostion} onChange={inputHandeler}/><br/><br/>
        <TextField label='Employee Salary' variant='outlined'  name='esalary' value={inputs.esalary} onChange={inputHandeler}/><br/><br/>
        <Button variant='contained'color='secondary' onClick={addHandler}>submit</Button>
    </div>
  )
}

export default AddEmployee