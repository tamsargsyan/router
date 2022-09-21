import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./index.css"

export const Blog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((res) => setData(res))
    },[])
    return(
        <div className="blog-wrapper">
            <h1>Blog</h1>
            <ul>
            {data && data.map((item, id) =>{
                return (
                    <li key={item.title + id}>
                        <Link to={`/blog/${item.id}`}>{item.title}</Link>   
                    </li> 
                )
            })} 
            </ul>
        </div>
    )
}