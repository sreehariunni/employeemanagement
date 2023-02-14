import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './components/Employee';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';


function Home() {

  let history=useNavigate()
  const handleDelete=(id)=>{
    // console.log('clicked');
    let index=employee.map(item=>item.id).indexOf(id)
    employee.splice(index,1)
     
    history('/')

  }
  const handleEdit=(id,uname,age,desig,salary)=>{
    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("desig",desig)
    localStorage.setItem("salary",JSON.stringify(salary))


  }


  return (
    <>
<h1 className='text-center p-3 mt-3' style={{color:"blue"}}>Employee Management System</h1>

    <div className='text-center'>

<h2 style={{color:"black"}}>

  <b>
Details of all Employee     </b></h2>

<Link to='/add'>
<Button variant="outline-success">Add New Employee <i class="fa-solid fa-user-plus"></i></Button>
</Link>

<Table striped bordered hover style={{margin:'7rem',width:"85%"}}>
  
      <thead>
        <tr style={{color:"red"}}>
          <th>Id</th>
          <th> Name</th>
          <th> Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        

        {
         employee && employee.length>0?
         employee.map(item=>(
          <tr style={{color:"black"}}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.desig}</td>
            <td>{item.salary}</td>
            <td>
              
    <Link to='/edit'>      
     <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='ms-2 me-3'variant="outline-info"><i class="fa-solid fa-user-pen"></i></Button> 
    </Link> 

            <Button onClick={()=>handleDelete(item.id)} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
      
            </td>
          </tr>
         )) :'no table data' 
        }
        
      </tbody>
    </Table>

    </div>
    </>
    // S
  )
}

export default Home