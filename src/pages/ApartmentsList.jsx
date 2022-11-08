import { useEffect } from "react";
import { useState } from "react";
import Apartment from "../components/Apartment";
import aptService from "../services/apartments.service";
import { useContext } from "react";
import { usernameContext } from "../context/username.context";

export default function ApartmentsList(){

    const [apartments, setApartments] = useState([]);

    //context
    const usernameValue = useContext(usernameContext);

    //dades del formulari
    const [nom, setNom] = useState("");
    const [cognom, setCognom] = useState("");
    const handlerNom = (e) => setNom(e.target.value);
    const handlerCognom = (e) => setCognom(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        //actualització del context amb nom i cognom del formulari
        usernameValue.updateNom(nom);
        usernameValue.updateCognom(cognom);
    }

    useEffect(()=>{
        aptService.getApartments()
        .then(results => {
            setApartments(results.data);
        })
    }, []);

    return(
    <div className="container">
        {/* <form onSubmit={submitHandler}>
            <label htmlFor="nom">Nom</label>
            <input type="text" value={nom} onChange={handlerNom} id="nom"/>
            <label htmlFor="cognom">Cognom</label>
            <input type="text" value={cognom} onChange={handlerCognom} id="cognom"/>
            <input type="submit" value="canviar nom d'usuari"/>
        </form> */}
        <h1>HOME PAGE</h1>
        <h2>Apartments list</h2>
        <div className="row justify-content-center">
        {apartments.map(apartment => <Apartment apartment={apartment} key={apartment._id}/>)}
        </div>
    </div>);
}