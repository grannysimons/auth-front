import { Link } from "react-router-dom";

export default ({apartment}) => {
    return(
        <div className="card col-3 m-3">
            <img src={apartment.img} className="card-img-top" alt={apartment.title} />
            <div className="card-body">
                <h5 className="card-title">{apartment.title}</h5>
                <p className="card-text">{apartment.pricePerDay} €/day</p>
                <Link to={"/"+apartment._id}>View details</Link>
            </div>
        </div>
    );
}