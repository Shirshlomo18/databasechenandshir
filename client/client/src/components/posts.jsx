import { useEffect, useState } from "react";
import Post from "./post"
function Posts(){
    const [postsArr,setPostsArr] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/post").then((result)=>result.json()).then((data)=>setPostsArr(data))
    },[])
    function deletePost(id) {
        fetch(`http://localhost:3000/post/${id}`, {
            method: "DELETE", headers: {
                "Content-Type": "application/json",
            }
        }).then((result) => { 
            if (result.status == 200) { 
                setPostsArr((prev)=> prev.filter((post)=> post.id !== id));
                alert("deleted successfully"); 
                return;
            } 
            else{
                alert("something went wrong:(")
                return;
            }
        })
    }
    if (postsArr.length === 0){
        return(
            <div>loading...</div>
        )
    }
    return (
    <>
        {postsArr.map((post)=><Post key = {post.id} details = {post} deletePost={()=>deletePost(post.id)}/>)}
    </>)

    }
    export default Posts;