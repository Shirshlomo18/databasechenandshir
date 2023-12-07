import { useEffect, useState } from "react";
import Post from "./post"
function Posts() {
    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const currUser = JSON.parse(localStorage.getItem('currUser'));
    const [posts, setPosts] = useState([]);
    const [postsArr, setPostsArr] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3000/post").then((result) => result.json()).then((data) => {setPostsArr(data); setIsLoading(false)})
    }, [])
    // console.log('currUser.id: ', currUser[0]['id']);
    const addItem = async (e) => {
        e.preventDefault();
        const newItemInput = {
            title: newTitle,
            user_id: currUser[0]['id'],
            body: newBody
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
            setPosts((prev) => [...prev, savedItem]);
            setShowForm(false);
        } catch (error) {
            console.error('Error adding new item:', error);
        }
    };
    if (!Array.isArray(postsArr)) {
        return (
            <div>an error happened</div>
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
                    <label htmlFor="newTitle">New Title</label>
                    <input
                        type="text"
                        id="newTitle"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="body">New Body</label>
                    <input type="text-area" id="body" max-length="255" value={newBody} onChange={((e) => {
                        setNewBody(e.target.value)
                    })} required />
                    <button type="submit">Submit</button>
                </form>
            )}
            {postsArr.map((post) => <Post key={post.id} details={post} />)}
        </>)

}
export default Posts;