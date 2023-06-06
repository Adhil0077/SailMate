import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form,Button,Col,Row } from 'react-bootstrap'
import FormContainer from '../components/FormContainer.jsx'

function RegisterScreen() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log('submit')
  }
  return (
   <FormContainer>
    <h1>Register</h1>

    <Form onSubmit={submitHandler}>

      <Form.Group className='my-2' controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
        type='name'
        placeholder='Enter Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}>
        </Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='email'>
      <Form.Label>Email Address</Form.Label>
      <Form.Control
      type='email'
      placeholder='Enter email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}>
      </Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='Password'>
      <Form.Label>Password</Form.Label>
      <Form.Control
      type='password'
      placeholder='Enter Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}>
      </Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='Confirm Password'>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control
      type='password'
      placeholder='Confirm Password'
      value={confirmPassword}
      onChange={(e)=>setConfirmPassword(e.target.value)}>
      </Form.Control>
      </Form.Group>

    <Button type='submit' variant='primary' className='mt-3'>
      Register
    </Button>
    </Form>

    <Row className='py-3'>
      <Col>
    Have an account?<Link to={'/login'}>Login</Link>
      </Col>
    </Row>
   </FormContainer>
  )
}

export default RegisterScreen
