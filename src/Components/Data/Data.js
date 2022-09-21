import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Data = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> res.json())
        .then(res => setData(res))
    },[])

    return(
        <>
        <div>
            {data && (
                <h2>{data.body}</h2>
            )}
        </div>
        </>
    )
}
export default Data;