import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';


function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState('')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    // console.log(ids);
    let uniqueid= ids.slice(0,8)


    employee.push({
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary

    })
    history('/')
    
  }
  return (
    <>

<h1 className='text-center p-3 mt-3' style={{color:"yellow",backgroundColor:"blue"}}>Add Details of Employee  </h1>
<div className='text-center p-2 fs-5'>
<p style={{color:"brown"}}>

<b>Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities.</b></p>

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
        <Form.Control style={{color:'red'}} type="text"  required
         onChange={(e)=>setUname(e.target.value)} 
          />

        <Form.Label style={{color:'black'}}>Employee Age</Form.Label>
        <Form.Control style={{color:'red'}} type="text"   required
        onChange={(e)=>setAge(e.target.value)}  
        />

        <Form.Label style={{color:'black'}}>Employee Designation </Form.Label>
        <Form.Control style={{color:'red'}} type="text" required 
        onChange={(e)=>setDesig(e.target.value)}
         />

        <Form.Label style={{color:'black'}}>Employee Salary </Form.Label>
        <Form.Control style={{color:'red'}}  type="text" required
         onChange={(e)=>setSalary(e.target.value)}
          />

        
       
      </Form.Group>

     
      <Button 

      onClick={(e)=>handleAdd(e)} 

      variant="primary" style={{color:'black'}} type="submit">

        <b>ADD</b>

      </Button>
    </Form>
        </Col>

      </Row>
    </Container>



    </>







  )
}

export default Add