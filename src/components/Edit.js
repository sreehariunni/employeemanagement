import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee'
import { useNavigate } from 'react-router-dom';



function Edit() {

  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

 useEffect(()=>{
 setId(JSON.parse(localStorage.getItem("id")))
 setUname(localStorage.getItem("uname"))
 setAge(JSON.parse(localStorage.getItem("age")))
 setDesig(localStorage.getItem("desig"))
 setSalary(JSON.parse(localStorage.getItem("salary")))




 },[])
 var index=employee.map((item)=>item.id).indexOf(id)
 let history=useNavigate()

 const handleUpdate=(e)=>{
  e.preventDefault()

  

  let emp=employee[index]
  emp.name=uname
  emp.age=age
  emp.desig=desig
  emp.salary=salary

history('/')
 }

//  console.log(id);
//  console.log(uname);
//  console.log(salary);


  return (
    <>
<h1 className='text-center p-3 mt-3' style={{color:"black",backgroundColor:"yellow"}}>Update Details of Employee  </h1>
<div className='text-center p-2 fs-5'>
{/* <p style={{color:"brown"}}>

<b>
Here, you can update particular  </b></p> */}

</div>


<Container>
      <Row>
        <Col md={4}>
          <img style={{
          width: 300,
          height: 300,
        }} src='https://cdn0.iconfinder.com/data/icons/user-icons-2/100/user-13-512.png'
          />



        </Col>
        <Col md={8} >
        <Form className='square bg-primary rounded-5 p-5' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'black'}}>Employee Name</Form.Label>
        <Form.Control style={{color:'red'}} value={uname}  type="text" onChange={(e)=>setUname(e.target.value)}  />

        <Form.Label style={{color:'black'}}>Employee Age</Form.Label>
        <Form.Control style={{color:'red'}} value={age} type="text" onChange={(e)=>setAge(e.target.value)}  />

        <Form.Label style={{color:'black'}}>Employee Designation </Form.Label>
        <Form.Control style={{color:'red'}} value={desig} type="text" onChange={(e)=>setDesig(e.target.value)} />

        <Form.Label style={{color:'black'}}>Employee Salary </Form.Label>
        <Form.Control style={{color:'red'}} value={salary} type="text" onChange={(e)=>setSalary(e.target.value)} />

        
       
      </Form.Group>

     
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" style={{color:'black'}} type="submit">
        <b>UPDATE</b>
      </Button>
    </Form>
        </Col>

      </Row>
    </Container>




    </>
  )
}

export default Edit