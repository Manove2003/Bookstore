import React, { useEffect, useState } from 'react'
import axois from '../api/axois';
import { useParams,Link} from 'react-router-dom';

const DeleteBook = () => {
  

    const {id} = useParams();
    const [delBook , setdlBook] = useState(null)
   
    const getBooks = async()=>{
        let book
        const Books = await axois.get("/getBooks")
        console.log(Books)
         book = Books.data.books.filter(item =>(
            item._id === id
        ))
        setdlBook(book[0])
    }

    const handleDelete = async()=>{
        const DeleteUrl = `/deleteBook/${id}`
        try{
           const response = await axois.delete(DeleteUrl)
            console.log(response);
            window.alert("Deleted Successfully")
        }catch(err){
            console.error(err.message);
            window.alert("Something went wrong")
        }
    }

    useEffect(()=>{

        getBooks()
    },[])

    
    
    return (
      
      
        <>
            {delBook != null && <div className='dlt'>
                <div><img src={delBook.image} alt="/" /></div>
                <div>
                  <p>Book Name : {delBook.bookname}</p>
                  <p>Author Name : {delBook.author}</p>
                  <p>Description : {delBook.description}</p>
                  <p>Price : {delBook.price}</p>
                  <br />
                  <Link to={`/viewBook`} id='delete' onClick={handleDelete}>Delete</Link>
                </div>        
            </div>}
        </>
  )
}

export default DeleteBook
