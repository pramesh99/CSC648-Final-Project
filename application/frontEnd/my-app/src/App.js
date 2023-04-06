import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import AboutUs from './pages/about/AboutUs';
import Preetham from './pages/team/Preetham';
import Derrick from './pages/team/Derrick';
import Shauhin from './pages/team/Shauhin';
import Hieu from './pages/team/Hieu';
import Lin from './pages/team/Lin';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';

function App() {
  const [serverData, setServerData] = useState([{}]);

  useEffect(() => {
    fetch("/test").then(
      response => response.json()
    ).then(
      data => {
        setServerData(data)
      }
    )
  }, []);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/aboutUs/Shauhin" element={<Shauhin />} />
      <Route path="/aboutUs/Hieu" element={<Hieu />} />
      <Route path="/aboutUs/Preetham" element={<Preetham />} />
      <Route path="/aboutUs/Lin" element={<Lin />} />
      <Route path="/aboutUs/Derrick" element={<Derrick />} />
    </Routes>
    </>
  );
}

export default App;
