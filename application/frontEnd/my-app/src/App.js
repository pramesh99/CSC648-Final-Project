import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import AboutUs from './pages/about/AboutUs';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
    <Routes>
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
    </>
  );
}

export default App;
