import axios from "axios";
// import { useNavigate } from 'react-router-dom';


const URL = "http://localhost:4000";

// post request for registration
export const  RegisterUser = async(data) =>{
    try{
       return await axios.post(`${URL}/register`,data)
       .then(resp=>{
        alert(resp.data.messege)
       })
    }catch(error){
      console.log("Error in API calling while register",error)
    }
}

// post request for registration
export const LoginUser = async(data , setUserLogin) =>{
    // const navigate = useNavigate()
    try{
       return await axios.post(`${URL}/login`,data)
       .then(resp =>{
        alert(resp.data.messege) ;
        setUserLogin(resp.data.user);
    });
    }catch(error){
      console.log("Error in API calling while login",error)
    }
}

// Post Request for add Contact
export const Addcontact = async(data)=>{
  try{
    return await axios.post(`${URL}/addContact`, data)
    .then(resp =>{
      alert("Are You Sure Add this Contact")
    })
  }catch(error){
    console.log("Error in API calling while adding contact")
  }
}

// get Request for Contact
export const getContacts = async() =>{
  try{
    return await axios.get(`${URL}`) 
  }catch(error){
    console.log("Error in API calling while getting contact")
  }
}

// get Request for Edit component by ID
export const getContactbyId = async(id) =>{
  id = id || " "
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(error){
    console.log("ERROR in API call while geting data by id ",error)
  }
}

// Put Requesst for update the data
export const editContact = async(id , data) =>{
  
    try{
      return await axios.put(`${URL}/${id}` , data)
  }catch(error){
   console.log("Error in API Call while editing data",error)
  }
}


// delete Request for delete data 
export const deleteContacts = async(id) =>{
    try{
      return await axios.delete(`${URL}/${id}`)
    }catch(error){
      console.log("Error in Calling API while Deleting contact ")
    }
}

