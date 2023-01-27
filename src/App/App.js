import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Views/Header'
import Absence from '../Components/Views/Absence'
import Class from '../Components/Views/Class'
import Justification from '../Components/Views/Justification'
import Presence from '../Components/Views/Presence'
import Student from '../Components/Views/Student'
// 
import AddAbsence from '../Components/Views/Add/AddAbsence'
import AddClass from '../Components/Views/Add/AddClass'
import AddJustification from '../Components/Views/Add/AddJustification'
import AddPresence from '../Components/Views/Add/AddPresence'
import AddStudent from '../Components/Views/Add/AddStudent'
//
import EditAbsence from '../Components/Views/Edit/EditAbsence'
import EditClass from '../Components/Views/Edit/EditClass'
import EditJustification from '../Components/Views/Edit/EditJustification'
import EditPresence from '../Components/Views/Edit/EditPresence'
import EditStudent from '../Components/Views/Edit/EditStudent'

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
        {/* address add Element */}
        <Route path='/addabsence_' element={<AddAbsence />} />
        <Route path='/addclass' element={<AddClass />} />
        <Route path='/addjustification_' element={<AddJustification />} />
        <Route path='/addpresence_' element={<AddPresence />} />
        <Route path='/addstudent_' element={<AddStudent />} />
        {/* address edit element*/}
        <Route path='/editabsence_/:id' element={<EditAbsence />} />
        <Route path='/editclass/:id' element={<EditClass />} />
        <Route path='/editjustification_/:id' element={<EditJustification />} />
        <Route path='/editpresence_/:id' element={<EditPresence />} />
        <Route path='/editstudent_/:id' element={<EditStudent />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
