import React, { useState , useEffect} from 'react'
import ShowList from './ShowList'
import { useNavigate } from 'react-router-dom'
import { getContacts  } from '../API/api'

const ContactManager = ({setUserLogin}) => {

  const [contact , setContact] = useState([])
  const [search , setSearch] = useState("")
  const navigate = useNavigate();

  useEffect(()=>{
    getAllContacts();
  },[ ])

  const getAllContacts = async() =>{
    const resp = await getContacts();
    setContact(resp.data);
  }

  return (

    <div className='contact-manager' >
      <div className='manager'>
        <div>
        <h1>Contact Manager</h1>
        <button onClick={()=> setUserLogin(null)} >Logout</button>
        </div>
      
      </div>
      <div className='contacts'>
        <div className='contact-box' >
        <input type={'search '} name="name" placeholder="Search your contact" onChange={(e)=> setSearch(e.target.value)} />
        <button onClick={()=> navigate("/addContact")} > + </button>

        <div className='allContacts'>
           {
            contact.filter((user) => user.name.toLowerCase().includes(search)).map((item)=>(
              <ShowList key={item._id} id={item._id} name={item.name} phone={item.phone}  />
            ))
           }
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactManager
