import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Loginsignup from './Homepage/Loginsignup.jsx';
import Welcome from './Homepage/welcome.jsx';
import ToDopage from './Homepage/Todopage.jsx';
import { useState } from 'react';

function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }


  return <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Loginsignup" element={<Loginsignup />} />
        <Route path="/Todopage" element={<ToDopage addList={addList}/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
