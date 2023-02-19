// const { updateOne } = require("../schema/contactSchema");
const Contact = require("../schema/contactSchema")

// Post request for add data in DB
const addContact = (req,resp) =>{
    const contact = req.body;

    Contact.findOne({name:contact.name} , async(error,user)=>{
        if(user){
            resp.send({messege:"This name is already saved"})
        }else{
            const newContact = new Contact(contact)
        try{
            await newContact.save();
            resp.status(201).json(newContact)
        }catch(error){
            console.log(error)
            resp.status(409).json({message:error.message})
        }
      }
    })
}
module.exports = addContact

// Get Request for all data
const getContacts = async(req,resp)=>{
    try{
      const allContacts = await Contact.find({});
      resp.status(201).json(allContacts) 
    }catch(error){
        resp.status(409).json({message:"Error while finding data" , error})
    }
}
module.exports = getContacts


// Get request for Edit component
const getContactById = async(req,resp) =>{
    try{
      const contact = await Contact.find({_id:req.params.id})
      resp.status(200).json(contact)
    }catch(error){
        resp.status(409).json({message:error.message})
    }
}
module.exports = getContactById

// Put request for Edit contact
const editContact = async(req,resp) =>{
    let contact = req.body;
    const newContact = new Contact(contact)
    try{
     await Contact.updateOne({_id:req.params.id},newContact)
     resp.status(201).json(newContact)
    }catch(error){
        resp.status(409).json({message:error.message})
    }
}
module.exports = editContact

// delete Request for delete contact
const deleteContact = async(req,resp)=>{

    try{
     await Contact.deleteOne({_id:req.params.id})
     resp.status(201).json({message:"Contact deleted SuccessFully"})
    }catch(error){
        resp.status(409).json({message:error.message})
    }
}
module.exports = deleteContact

module.exports = {
    addContact:addContact,
    getContacts:getContacts,
    getContactById:getContactById,
    editContact:editContact,
    deleteContact:deleteContact,
}