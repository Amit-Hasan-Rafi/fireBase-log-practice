import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../fireBase-initialise/fireBase-initialise';
import { useState } from 'react';
function LogIn() {
  const [userEmail , setUserEmail] = useState('')
  const auth = getAuth(app)
  const logInSubmitHandler = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password) // BY this we making log-in ....if the user registered on your side , then he can log-in in here by the same email and password what he was given on the register from
      .then(result => {
        const user = result.user

        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handelEmailValue=(event)=>{
    const emailAdress = event.target.value
    setUserEmail(emailAdress)
    console.log(emailAdress)
  }
  const restPassword = () => {
    if(!userEmail){
      alert("provide your email first")
    }
    sendPasswordResetEmail(auth , userEmail) // normally we can catch the email outside the 'LogInSubmit' function, so we give 'onBlur' property on the email input and make a useState ffor it to get the input value
    .then(()=>{
      alert('Password reset mail has been sended on your e-mail. Check it!! (SPAN FOLDER)')
    })
    .catch(error=>{
      console.error(error)
    })
  }

  return (
    <div className='mx-auto w-50 mt-4 border p-5 mt-5'>
      <h1 className='text-success' >Please Log-in !!!</h1>
      <Form onSubmit={logInSubmitHandler} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  onBlur={handelEmailValue} type="email" placeholder="Enter email" name='email' required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log-in
        </Button>
      </Form>
      <p className='mt-4' ><small>If you don't register, please <Link to='/google-singUp-from' >Register</Link> </small></p>
      <h6>forget password?<Button onClick={restPassword} variant="link">rest it</Button></h6>
    </div>
  )
}

export default LogIn