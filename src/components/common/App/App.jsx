// External deps
import React, { useEffect } from "react";

// Internal deps
import Router from "../../../Router";
import Nav from "../Nav";

// Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-redux';
  }, []);

  return (
    <main className="app">
      <Nav />
      <div className="content">
        <Router />
      </div>
    </main>
  );
}

export default App;
