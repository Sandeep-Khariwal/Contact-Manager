import React, { useEffect, useState }  from 'react'
import { getContactbyId , editContact} from '../API/api'
import { useNavigate , useParams } from 'react-router-dom'

 const defaultValue = {
  name:"",
  phone:"",
 }

const EditContact = () => {

    const [user,setUser] = useState(defaultValue)

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      getelement();
    },[ ])

    const getelement = async() =>{
        const resp = await getContactbyId(id)
        setUser(resp.data[0])
    }

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const editData = async() =>{
      let yes = window.confirm("Are you Sure For Edit Contact")
      if(yes){
        await editContact(id , user)
        navigate("/")
      }
      navigate("/")
    } 

  return (
    <div className="login">
    <h1>Edit Contact</h1>
    <input type="text" name="name" value={user.name} onChange={handleChange}></input>
    <input type="number" name="phone" value={user.phone} onChange={handleChange}></input>
    <div className="button"  onClick={editData} >Edit</div>
</div>
  )
}

export default EditContact
