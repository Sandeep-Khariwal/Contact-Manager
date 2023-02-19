import './App.css';
import { useState } from 'react';
import ContactManager from './component/ContactManager';
import Login from './component/Login';
import Register from './component/Register';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import "./styles/contactManager.scss"
import "./styles/showlist.scss"
// import "./styles/home.scss"
import "./styles/login.scss"
import "./styles/register.scss"





function App() {

  const [user , setUserLogin] = useState({})

  return (
    <div className="App">

    <Router>
      <Routes>
        <Route exact path='/' element={user && user.password?<ContactManager setUserLogin={setUserLogin} />:<Login setUserLogin={setUserLogin} />}/>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login setUserLogin={setUserLogin}/>}/>
        <Route exact path='/addContact' element={<AddContact/>}/>
        <Route exact path='/:id' element={<EditContact/>}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
