import axios from "axios";


export default axios.create({
     baseURL:"https://backend-book-store.vercel.app/api/v1"
    // baseURL:"http://localhost:1000/api/v1"
})