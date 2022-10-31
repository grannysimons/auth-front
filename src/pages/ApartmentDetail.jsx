import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import aptService from "../services/apartments.service";

export default function (){

    const {apartmentId} = useParams();
    const [apartment, setApartment] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        aptService.getApartment(apartmentId)
        .then(response => {
            setApartment(response.data);
        })

    }, [])

    const deleteHandler = ()=> {
        aptService.deleteApartment(apartmentId)
        .then(()=>{
            navigate("/");
        })
    }

    return(
    <div>
        <h1>Detail page</h1>
        <div className="card text-center">
            <div className="card-body">
                <img src={apartment.img} alt={apartment.title} />
                <h5 className="card-title">{apartment.title}</h5>
                <p className="card-text">{apartment.pricePerDay} €/day</p>
                {/* <a href="#" className="btn btn-danger">Go somewhere</a> */}

                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Delete
                </button>
            </div>

            <div className="card-footer text-muted">
                {apartment.pricePerDay} €/day
            </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Segur que vols eliminar aquest apartment?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={deleteHandler} data-bs-dismiss="modal">Si, elimina, elimina!</button>
                    </div>
                    </div>
                </div>
                </div>
    </div>);
}