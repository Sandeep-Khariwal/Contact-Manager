// const User = require("../schema/userSchema.js")
const User = require("../schema/userSchema");

const Register = (req,resp)=>{
    const user = req.body;

    User.findOne({email:user.email},async(err,user)=>{
        if(user){
            resp.send("User already exist");
        }else{
            const newUSer = new User(user);
        try{
        await newUSer.save();
        resp.status(201).json({messege:"User Registered Successfully",newUSer});
        }catch(error){
        console.log("Error while registering in DB",error)
        resp.status(409).json({message:error.message})
        }
      }
    })
    
}
module.exports = Register

const Login = (req,resp)=>{
    const {email , password} = req.body;

    User.findOne({email:email},(err,user)=>{
       if(user){
        if(password === user.password){
            resp.send({messege:"Login Successfully" , user:user})
        }
        else{
            resp.send({messege:"Invelid Email and Password"})
        }
       } else{
        resp.send({messege:"User not Registered"})
       }
    })
}
module.exports = Login

module.exports= {
    Register:Register,
    Login:Login,
}