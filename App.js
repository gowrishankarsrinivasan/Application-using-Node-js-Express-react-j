// App.js

import React from "react";
import "./App.css";
import UserForm from "./form"; // Assuming you have the UserForm component in a separate file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <UserForm />
      </main>
    </div>
  );
}

export default App;
