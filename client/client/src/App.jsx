import { useState } from 'react'
import './App.css'
import {Route,Routes,useLocation,useParams,useSearchParams,Link} from "react-router-dom";
// import Home from "./components/Home";
// import Comments from "./components/Comments";
import Login from "./components/login";
// import Posts from "./components/Posts";
// import Todos from "./components/Todos";
import Notfound from "./components/notFound";

function App() {
  return (
    <>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
                <Route path="posts" element={<PostsLayout />}>
                  <Route path=":id" element={<Post />} />
                </Route>
                <Route path="todos" element={<Todos />} />
                <Route path="*" element={<Notfound />} />
        </Routes>
    </>
  )
}export default App

