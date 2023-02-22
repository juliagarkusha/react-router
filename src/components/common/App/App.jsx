// External deps
import React, { useEffect } from "react";

// Internal deps

// Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-redux';
  }, []);

  return (
    <main className="app">
      app
    </main>
  );
}

export default App;
