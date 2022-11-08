import './App.css';
import { Route, Routes } from 'react-router-dom';
import ApartmentsList from './pages/ApartmentsList';
import ApartmentDetail from './pages/ApartmentDetail';
import ApartmentAdd from './pages/AparmentAdd';
import ApartmentEdit from './pages/ApartmentEdit';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnonim from './components/IsAnonim';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <ApartmentsList /> } />
        <Route path="/:apartmentId" element={<ApartmentDetail />} />
        <Route path="/add" element={<IsPrivate><ApartmentAdd /></IsPrivate>} />
        <Route path="/:apartmentId/edit" element={<IsPrivate><ApartmentEdit /></IsPrivate>} />
        <Route path="/signup" element={<IsAnonim><SignupPage /></IsAnonim>} />
        <Route path="/login" element={<IsAnonim><LoginPage /></IsAnonim>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
