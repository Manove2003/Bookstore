import React,{useState} from 'react'
import "./Style.css";
import axois from '../api/axois';
import { useParams } from 'react-router-dom';


const UpdateBook = () => {
  const [bookname,setBookName]=useState("");
  const [authorname,setAuthorName]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [price,setPrice]=useState("");
  const {id} = useParams();

const handleSubmit=async()=>{
    const data = {
      book:bookname,
      author : authorname,
      description: description,
      Image:image,
      Price:price
    }
    
    const UPDATE_URL = `/updateBook/${id}`
    try{
      const response = await axois.put(UPDATE_URL,JSON.stringify(data),{
        headers:{
          "Content-Type": 'application/json'
        }
      }
      )
      window.alert("Updated Successfully")
        
      const bookfield = document.getElementById("bookname")
      bookfield.value = '';
      const authorfield = document.getElementById("authorname")
      authorfield.value = '';
      const descriptionfield = document.getElementById("description")
      descriptionfield.value = '';
      const imagefield = document.getElementById("image")
      imagefield.value = '';
      const pricefield = document.getElementById("price")
      pricefield.value = '';

      
    }catch(err){
      console.log(err.message);
      window.alert("Something went wrong")
    }
  }
  return (

    <div className='update-book'>
        <div className='books'>
          <div className="input-container">
            <h2 id='up'>Update Book</h2>
            <label for="bookname">Book Name</label>
            <input type="text"  id="bookname" placeholder='Enter Book Name' value={bookname} onChange={(e)=>setBookName(e.target.value)} />
          </div>
          <div className="input-container">
            <label for="authorname<">Author Name</label>
            <input type="text"  id="authorname" placeholder='Enter The Name Of Author' value={authorname} onChange={(e)=>setAuthorName(e.target.value)}/>
          </div>
          <div className="input-container">
            <label for="description">Description</label>
            <input type="text"  id="description" placeholder='Enter Description Of Book '  value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className="input-container">
            <label for="image">Image</label>
            <input type="text"  id="image" placeholder='Enter The URL Of  The Image' value={image} onChange={(e)=>setImage(e.target.value)}/>
          </div>
          <div className="input-container">
            <label for="price">Price</label>
            <input type="number"  id="price" placeholder='Enter The Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <button className="login-btn" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default UpdateBook;
