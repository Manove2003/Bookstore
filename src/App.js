import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import Moreinfo from './components/Moreinfo'
const App = () => {
  return (
    <Router>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addBook' element={<AddBook/>}></Route>
          <Route path='/viewBook' element={<ViewBook/>}></Route>
          <Route path='/moreinfo' element={<Moreinfo/>}></Route>
          <Route path="/updateBook/:id" element={<UpdateBook/>}></Route>
          <Route path="/deleteBook/:id" element={<DeleteBook/>}></Route>
       </Routes>
    </Router>
  )
}

export default App
