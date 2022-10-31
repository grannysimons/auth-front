import './App.css';
import { Route, Routes } from 'react-router-dom';
import ApartmentsList from './pages/ApartmentsList';
import ApartmentDetail from './pages/ApartmentDetail';
import ApartmentAdd from './pages/AparmentAdd';
import ApartmentEdit from './pages/ApartmentEdit';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <ApartmentsList /> } />
        <Route path="/:apartmentId" element={<ApartmentDetail />} />
        <Route path="/add" element={<ApartmentAdd />} />
        <Route path="/:apartmentId/edit" element={<ApartmentEdit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
