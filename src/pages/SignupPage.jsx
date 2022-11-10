import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACK_URL = process.env.REACT_APP_API_URL || "http://localhost:5005/api/auth";

function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [missatgeError, setMissatgeError] = useState("");

    const navigate = useNavigate();

    const usernameHandler = e => setUsername(e.target.value);
    const passwordHandler = e => setPassword(e.target.value);

    const clickHandler = () => {
        axios.post(`${BACK_URL}/signup`, {username, password})
        .then(response => {
            if(!response.data.error) navigate("/login");
            else {
                setMissatgeError("Error des de then: hi ha hagut un error, torna-ho a provar");
            }
        })
        .catch(err => {
            //status no és 200
            //err.response.data ?
            setMissatgeError("Error des de catch: hi ha hagut un error, torna-ho a provar");
        })
    }

    return(
        <div>
            <h1>Signup</h1>
            <form>

                {missatgeError!="" && <div className="alert alert-danger" role="alert">{missatgeError}</div>}

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={usernameHandler}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={passwordHandler}/>

                <input type="button" onClick={clickHandler} value="signup"/>
            </form>
        </div>
    );
}

export default SignupPage;