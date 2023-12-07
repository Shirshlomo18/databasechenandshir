import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
 const navigate=useNavigate();
function onInputChange(e, setFunction) {
    setFunction(e.target.value);
  }
    const handleSubmit= async (e)=>{
        if(!username || !password){
            alert("please fill all fields")
            return
        }
        const enteredUsername=e.target.username.value;
        const enteredPassword=e.target.password.value;
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: enteredUsername, password: enteredPassword }),
            });
            console.log(response);
            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('currUser', JSON.stringify(userData));
                navigate('/home');
              } else {
                alert('Invalid username or password');
              }
            } catch (error) {
              console.error('Error during login:', error);
              alert('An error occurred during login');
            }
    }
    
    return(
        <>
      <form onSubmit={handleSubmit} className="form" >
        <h1>Log in</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={(e) => onInputChange(e, setUsername)}
          value={username}
        ></input>
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="text"
          onChange={(e) => onInputChange(e, setPassword)}
          value={password}
        ></input>
        <button type="submit">LOG IN</button>
      </form>
    </>
  );
}
export default Login;
// let entered = false;

// for (let i = 0; i < data.length; i++) {
//   if (enteredUsername == && enteredPassword == data[i].website) {
//     navigate("/home");
//     entered = true;
//     localStorage.setItem("currUser", JSON.stringify(data[i]));
//   }
// }
// if (!entered) {
//   alert("Invalid username or password");
//   navigate(".");
// }