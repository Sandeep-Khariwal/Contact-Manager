import React, { useState }  from 'react'
import { Addcontact } from '../API/api'
import { useNavigate } from 'react-router-dom'

const defaultContact = {
    name:"",
    phone:"",
}

const AddContact = () => {

    const [user,setUser] = useState(defaultContact)
    const navigate = useNavigate();

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const addContact = async() =>{
      const {name , phone} = user
      if(name && phone){
      await Addcontact(user);
      navigate("/")
      }else{
        alert("Detail is invalid")
      }
    }

  return (
    <div className="login">
    <h1>Add Contact</h1>
    <input type="text" name="name" /*value={user.email}*/ onChange={handleChange} placeholder="Enter Name"></input>
    <input type="number" name="phone" maxLength={10} minLength={10} /*value={user.password}*/ onChange={handleChange} placeholder="Enter Number" ></input>
    <div className="button" onClick={addContact} >Add</div>
</div>
  )
}

export default AddContact
