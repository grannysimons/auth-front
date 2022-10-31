import { useEffect } from "react";
import { useState } from "react";
import Apartment from "../components/Apartment";
import aptService from "../services/apartments.service";

export default function ApartmentsList(){

    const [apartments, setApartments] = useState([]);

    useEffect(()=>{
        aptService.getApartments()
        .then(results => {
            console.log("axios: ", results);
            setApartments(results.data);
        })
    }, []);

    return(
    <div className="container">
        <h1>Apartments list</h1>
        <div className="row justify-content-center">
        {apartments.map(apartment => <Apartment apartment={apartment} key={apartment._id}/>)}
        </div>
    </div>);
}