import { useContext } from 'react';
import { usernameContext } from '../context/username.context';
import { authContext } from '../context/auth.context';

function Navbar(){

    const valors = useContext(usernameContext);
    const {logOutUser, user, isLoggedIn} = useContext(authContext);

    const logoutHandler = () => {
      logOutUser();
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">{"Hola usuari " + valors.nom + " " + valors.cognom}</a> */}
            <a className="navbar-brand" href="#">{isLoggedIn?"Hola " + user.username : "Hola usuari anònim"}!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {isLoggedIn && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button type="button" className="nav-link" onClick={logoutHandler}>Logout</button>
                </li>
              </ul>}
              <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;