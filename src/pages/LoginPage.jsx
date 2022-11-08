import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/auth.context";


const BACK_URL = "http://localhost:5005/api/auth";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [missatgeError, setMissatgeError] = useState("");

    const {storeToken, authenticateUser} = useContext(authContext);

    const navigate = useNavigate();

    const usernameHandler = e => setUsername(e.target.value);
    const passwordHandler = e => setPassword(e.target.value);

    const clickHandler = () => {
        //comprovacions
        if(username==='' || password === '') {
            setMissatgeError("falten camps");
        } else {
            axios.post(`${BACK_URL}/login`, {username, password})
            .then(response => {
                if(response.data.error) {
                    setMissatgeError(response.data.error);
                    return;
                }
                //response.data.authToken
                
                //guardar-lo al navegador (local storage)
                storeToken(response.data.authToken);
                //avisar al context que estem logejats
                authenticateUser();
            })
            .catch(err => {
                //status no és 200
                setMissatgeError("Error des de catch: hi ha hagut un error, torna-ho a provar");
            })
        }
    }

    return(
        <div>
            <h1>Login</h1>
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

export default LoginPage;