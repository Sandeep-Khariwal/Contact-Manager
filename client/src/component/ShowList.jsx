import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import {deleteContacts} from "../API/api.js";


const ShowList = ({id ,name, phone}) => {

  const navigate = useNavigate()

  const deleteContact = async(id) =>{
    // alert(id)
    const yes = window.confirm("Click 'ok' for Delete 'or' Click 'Cancel' for edit" )
     if(yes){
      await deleteContacts(id)
      navigate("/")
     }
    navigate("/") 
  }


  return (
    <div  className='showList'  >
      <div className='info'>
      <h2>{name}</h2>
      <p>{phone}</p>
      </div>
      <div className='editDelete' >
        <Link to={`/${id}`}><button >Edit</button></Link>
        <Link to={`/${id}`}><button onClick={()=>deleteContact(id)} >Delete</button></Link>
        
      </div>
    </div>
  )
}

export default ShowList
