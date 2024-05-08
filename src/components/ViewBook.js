import React, { useState,useEffect } from 'react'
import "./Style.css"
import axios from 'axios'
import BookSection from './BookSection';
const ViewBook = () => {
  const [Data,setData]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      await axios.get("https://backend-book-store.vercel.app/api/v1/getBooks").then((res)=>setData(res.data.books));
    };
    fetch();
  },[Data]);
  return (
    <div className='viewbook'>
        <div className='booksectiontitle'>
           <h4 className=''>Book Section</h4>
        </div>
        {Data ? <BookSection data={Data}/>: <div>Loading...</div>}
    </div>
  ) 
}

export default ViewBook;