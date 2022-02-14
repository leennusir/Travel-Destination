import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails'
import Data from './data/db.json';

function App() {
  return (
    < >
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={ Data } />} />
      </Routes>
      
    </>
  );
}

export default App;
