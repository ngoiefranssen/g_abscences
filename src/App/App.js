import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Views/Header'
import Absence from '../Components/Views/Absence'
import Class from '../Components/Views/Class'
import Justification from '../Components/Views/Justification'
import Presence from '../Components/Views/Presence'
import Student from '../Components/Views/Student'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/absence' element={<Absence />} />
        <Route path='/class' element={<Class />} />
        <Route path='/justification' element={<Justification />} />
        <Route path='/presence' element={<Presence />} />
        <Route path='/student' element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
