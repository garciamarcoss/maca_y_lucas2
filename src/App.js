import "./App.css";
import React, { useState, useEffect } from "react";
import First from "./components/First";
import Fourth from "./components/Fourth";
import Second from "./components/Second";
import Third from "./components/Third";
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <First />
          <Second />
          <Third />
          <Fourth />
        </div>
      )}
    </div>
  );
}

export default App;
