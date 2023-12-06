import { useEffect, useState } from "react";
import Post from "./post"
function Posts(){
    const [postsArr,setPostsArr] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/post").then((result)=>result.json()).then((data)=>setPostsArr(data))
    },[])
    if (postsArr.length === 0){
        return(
            <div>loading...</div>
        )
    }
    return (
    <>
        {postsArr.map((post)=><Post key = {post.id} details = {post}/>)}
    </>)

    }
    export default Posts;