import React from 'react'
import "./Style.css"
import {useNavigate,Link} from "react-router-dom"

const Home = () => { 
   const navigate=useNavigate();

  return (
    <section>
        <div className='content'>
          <h3>BOOK STORE <br />FOR YOU</h3>
          <p>Checkout The Books From Here.</p>
           <Link to="/viewBook"><button onClick={()=>navigate('/viewBook')}>View Books</button></Link>
        </div>
        <div className='image' >
          <img src="./vector1.png" alt="" />
          </div>
    </section>
  )
}

export default Home
