import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function GoogleSingUpform() {
        
    const auth = getAuth()
    const [passwordError , setpasswordError] = useState('')
    const formSubmit = (event) =>{
        event.preventDefault() //normally when we click this submit handler it refresh the whole page.To stop this behaver we ues '.perventDefault()' hook
        const email = event.target.email.value // we make a 'name' property on the input field , from their we geting the target. and we taking the value from the target
        const password = event.target.password.value

        //password validations
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setpasswordError('must give two uppercase')
            return; // return must!!
        }
        if( password.length < 6 ){
            setpasswordError('must give more then 6 letter')
            return;
        }
        if(!/(?=.*[!@#$%^&*?])/.test(password)){
            setpasswordError('must give at least one special character in this(!@#$%^&*?)')
            return;
        }
        setpasswordError('') // it's for defult ...if everything was uptodate


        createUserWithEmailAndPassword(auth,email,password) // it's a hook for using email,password mathod
       .then(result =>{
        const user = result.user
        console.log(user)
       })
       .catch(error=>{
        console.error('error',error)
       })
    }
    /************************ 
    const keypressHandler = event =>{
        console.log(event.target.value)
    } //if wanna work on, what user pressing on the input and you need that instandly.Then you can use 'onChange' property....
    ********************************************/
    const getEmailValueByUnfocusingMouse = event =>{ // when you pass way from the input filed , then you will get the value by using 'onBlur' property 
        console.log(event.target.value)
    }
    
  return (
    <div className='mx-auto w-25 mt-4 border p-5 mt-5' >
         <Form  onSubmit={formSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required /*'required=if not type anythiing set user warning*/ /*onChange={keypressHandler}*/ onBlur={getEmailValueByUnfocusingMouse}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password' required />
      </Form.Group>
        <p className='text-danger'>{passwordError}</p> {/*Here we setting the password validation text*/}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default GoogleSingUpform