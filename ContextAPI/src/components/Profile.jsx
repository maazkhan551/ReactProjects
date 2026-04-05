import React,{useContext} from 'react'
import userContext from '../context/UserContext'
function Profile() {
   const {user} = useContext(userContext)
   if(!user) return <div>Please login</div>
   else return <div>Welcome {user.name}</div>
}

export default Profile
