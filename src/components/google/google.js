import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import app from '../../fireBase-initialise/fireBase-initialise';
import { useState } from 'react';
function Google() {

    const auth = getAuth(app) // first get the "GetAuth(app)"
    const provider = new GoogleAuthProvider() //this is the googleAuth provider and must give "new" before wrote "GoogleAuthProvider" 
  
    const [user , setuser] = useState({})
  
    const singOutBtn =()=>{ //singOut prosecc
      signOut(auth)
      .then( result =>{//sing-in prosecc
        setuser({}) // we can singout like this . {} means no data
      })
    }
  
    const singInBtn = () =>{ //sing-in prosecc
      signInWithPopup(auth , provider) // "signInWithPopup" by this the sing-in tab will open by this , and it's on kind of like Fetch , we can get responce from it
       .then( result =>{
        setuser(result.user) // seted user data in the useState
        // console.log(result.user) //Now can see we can have the email-user's data , so we can use it in anywhere
      })
    }
  return (
    <div className="App">
    { user.email ?
        <button onClick={singOutBtn}>Sing out</button> 
        :
        <button onClick={singInBtn}>Sing in</button> 
    }
    { user.email &&
     <div>
        <h2>User Name: {user.displayName}</h2>
        <h2>User E-mail: {user.email}</h2>
     </div>
    }
   </div>
  )
}

export default Google