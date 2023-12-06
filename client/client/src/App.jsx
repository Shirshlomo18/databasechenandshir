import { useState } from 'react'
import './App.css'
import {
  Route,Routes,useLocation,useParams,useSearchParams,Link} from "react-router-dom";
import Login from "./components/login";
// import Todos from "./components/Todos";
import Notfound from "./components/notFound";
import Home from "./components/home";
import Todos from "./components/todos";
import Posts from "./components/posts";
import Info from "./components/info";
import Logout from "./components/logout";

function App() {
  return (
    <>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
                <Route path="home" element={<Home />} />
                  {/* <Route path=":id" element={<Post />} /> */}
                {/* </Route> */}
                {/* <Route path="todos" element={<Todos />} /> */}
                <Route path="*" element={<Notfound />} />
                <Route path="todos" element={<Todos />} />
                <Route path="posts" element={<Posts />} />
                <Route path="logout" element={<Logout />} />
                <Route path="info" element={<Info />} />
        </Routes>
    </>
  )
}export default App

