import React from "react";

import "./App.css";

function App() {
  return (
    <div
      className="App w-64 h-32 bg-check-background"
      style={{ backgroundImage: "var(--primary-check-background)" }}
    >
      <p>TODO APP</p>
    </div>
  );
}

export default App;
