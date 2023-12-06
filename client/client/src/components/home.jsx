import { Link } from "react-router-dom";
function Home() {
    return (<>
        <h2>What would you like to do?</h2>
        <Link to="/logout">
            <button>LogOut</button>
        </Link>
        <Link to="/posts">
            <button>posts</button>
        </Link>
        <Link to="/todos">
            <button>Todo</button>
        </Link>
        <Link to="/info">
            <button>Info</button>
        </Link>
    </>)
}
export default Home;