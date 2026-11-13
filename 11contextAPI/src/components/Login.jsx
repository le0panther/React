import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState( '')

    const {setUser}=useContext(UserContext)

    // const value = useContext(UserContext);
    // const setUser = value.setUser;
    //The above line of code is the simplified code version of te line above it 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username " value={username} onChange={(e)=>setUsername(e.target.value)}/>
            {"  "}
            <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;