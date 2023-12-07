import { Link } from "react-router-dom";
function Home() {
    const handleLogout=()=>{
        localStorage.removeItem("currUser");
        // Redirect to the home component
        history.push('/');    
    }
    return (<>
        <h2>What would you like to do?</h2>
        <Link to="/logout">
            <button>LogOut</button>
        </Link>
        <Link to="/posts">
            <button>posts</button>
        </Link>
        <Link to="/todos/:userId">
            <button>Todo</button>
        </Link>
        <Link to="/info">
            <button>Info</button>
        </Link>
        <Link to='/login'>
      <button type="button" onClick={handleLogout}>
          Logout
        </button></Link>
    </>)
}
export default Home;