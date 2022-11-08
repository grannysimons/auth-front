// import ApartmentsService from "../services/apartments.service";
// const aptService = new ApartmentsService();

import { useState } from "react";
import aptService from "../services/apartments.service";
import {useNavigate} from 'react-router-dom';

function ApartmentAdd(){
    // const [title, setTitle] = useState(""); 
    // const [image, setImage] = useState("");
    // const [price, setPrice] = useState();
    const [form, setForm] = useState({title: "", image: "", price: ""});

    const navigate = useNavigate();

    const handleTitle = (e) => {
        //e.target.value
        const copiaForm = {...form};
        copiaForm.title = e.target.value;
        setForm(copiaForm)
    }
    const handleImage = (e) => {
        const copiaForm = {...form};
        copiaForm.image = e.target.value;
        setForm(copiaForm)
    }

    const handlePrice = (e) => {
        const copiaForm = {...form};
        copiaForm.price = e.target.value;
        setForm(copiaForm)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newApartment = {
            img: form.image,
            pricePerDay: form.price,
            title: form.title
        };
        aptService.addApartment(newApartment)
        .then(results => {
            navigate("/"+results.data._id);
        })
        .catch(err => {
            // navigate("/error");
        })
    }

    return(
        <div>
            <h1>Apartment add</h1>
            <form className="container" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="titleApartment" className="form-label">Title</label>
                    <input type="text" className="form-control" id="titleApartment" aria-describedby="emailHelp" value={form.title} onChange={handleTitle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageApartment" className="form-label">Image</label>
                    <input type="text" className="form-control" id="imageApartment" value={form.image} onChange={handleImage}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="priceApartment" className="form-label">Price per day</label>
                    <input type="number" className="form-control" id="priceApartment" value={form.price} onChange={handlePrice}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
}

export default ApartmentAdd;