import React from 'react'
import {Link} from "react-router-dom"
// import { useParams } from 'react-router-dom';

const BookSection = ({data}) => {
  //  const {id} = useParams();
    return (
    <div className='booksection'>
        {data && data.map((item,index)=>
          
          <div className='item-holder'>
            <div className='imagebook'><img src={item.image} alt="/" /></div>

            <div className='book-info'>
            <h2>
              {item.bookname.length > 20 
                ?`${item.bookname.slice(0,20)}...` 
                : item.bookname}
            </h2> 
            
            <b>Rs. {item.price}</b>
            <div className='btn'>
              <Link to={`/updateBook/${item._id}`} id='update'>Update</Link>
              <Link to={`/deleteBook/${item._id}`} id='delete' >More Info</Link>
            </div>
            </div>
          </div>
          
        )}

    </div>
  )
}

export default BookSection
