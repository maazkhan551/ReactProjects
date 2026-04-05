import React, {useState,useContext} from 'react'
import userContext from '../context/UserContext'
function Login() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(userContext);
    const SubmitHandle = (e)=>{
        e.preventDefault()
        setUser({name,password})
    }
  return (
     <>
        <h2>Login</h2>
        <input type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder='username'
        />
        <input type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={SubmitHandle}>
            SUbmit
        </button>
     </>
  )
}

export default Login
