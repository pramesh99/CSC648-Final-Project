import './App.css';
import Navbar from './components/navbar/Navbar';
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
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div style={{textAlign:"center"}}>
          {(typeof serverData.users === "undefined") ? (
            <p>Loading...</p>
          ) : (
            serverData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
