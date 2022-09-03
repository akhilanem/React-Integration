import {React,useState} from 'react';
import axios from 'axios';


function Submit(){

    const [posts,setPosts] = useState([])

    const handleSubmit = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setPosts(response.data))
    }

    const handleReset = () => {
        setPosts([])
    }

    return (
        <div>
            <button onClick={handleSubmit} type="submit">Submit</button>
            <button onClick={handleReset}>Reset</button>
            <ul>
                {posts.map(eachObject => {
                    return (
                        <div>
                            <p>{eachObject.id}</p>
                            <h1>{eachObject.title}</h1>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Submit