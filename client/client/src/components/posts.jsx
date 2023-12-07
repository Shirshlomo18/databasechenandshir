import { useEffect, useState } from "react";
import Post from "./post"
function Posts(){
    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const addItem = async (e) => {
        e.preventDefault();
        const newItemInput = {
          title: newTitle,
          userId: currUser.id,
          body:
        };
        try {
          const response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItemInput),
          });
    
          if (!response.ok) {
            throw new Error(`Failed to add new item: ${response.status}`);
          }
    
          const savedItem = await response.json();
          setTodos((prev) => [...prev, savedItem]);
          setShowForm(false);
        } catch (error) {
          console.error('Error adding new item:', error);
        }
      };
    const [postsArr,setPostsArr] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/post").then((result)=>result.json()).then((data)=>setPostsArr(data))
    },[])
    if (postsArr.length === 0){
        return(
            <div>loading...</div>
        )
    }

  const ifYouClick = () => {
    setShowForm(true);
  };
    return (
    <>
     <button type="button" onClick={ifYouClick}>
          Add item
        </button> {showForm && (
          <form onSubmit={addItem}>
            <input
              type="text"
              id="newTitle"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
        {postsArr.map((post)=><Post key = {post.id} details = {post}/>)}
    </>)

    }
    export default Posts;