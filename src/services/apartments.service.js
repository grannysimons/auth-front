import axios from 'axios';

// const apiUrl = "https://apartmentsback.herokuapp.com/api/apartments";
const apiUrl = "http://localhost:5005/api/apartments";

class ApartmentsService {
    getApartments(){
       return axios.get(apiUrl); 
    }
    getApartment(apartmentId) {
        return axios.get(apiUrl + "/" + apartmentId)
    }
    deleteApartment(apartmentId) {
        return axios.delete(apiUrl + "/" + apartmentId);
    }
    addApartment(apartment) {
        // return axios.post(apiUrl, {img: apartment.img, title: apartment.title, pricePerDay: apartment.pricePerDay});
        return axios.post(apiUrl, apartment);
    }
    editApartment(apartment) {
        return axios.put(apiUrl + "/" + apartment._id, apartment);
    }
    // editApartment_v2(apartment, apartmentId){
    //     return axios.put(apiUrl + "/" + apartmentId, apartment);
    // }
}

const aptService = new ApartmentsService();

// export default ApartmentsService;
export default aptService;