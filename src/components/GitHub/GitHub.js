import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import app from '../../fireBase-initialise/fireBase-initialise'

function GitHub() {

    const auth  = getAuth(app)
    const provider = new GithubAuthProvider()
    const [user , setuser] = useState([])

    const singInBtn =()=>{ //sing-in prosecc
        signInWithPopup(auth , provider)
        .then(result =>{
            setuser(result.user)
            console.log(result.user)
        })
    }
    const singOutBtn =()=>{ //singOut prosecc
        signOut(auth)
        .then( result =>{
          setuser({}) 
        })
      }

  return (
    <div className="App">
    { user.uid ?
        <button onClick={singOutBtn}>Sing out</button> 
        :
        <button onClick={singInBtn}>Sing in</button> 
    }
    { user.uid &&
     <div>
        <h2>User Name: {user.displayName}</h2>
        <img src={user.photoURL} alt="" />
     </div>
    }
   </div>
  )
}

export default GitHub