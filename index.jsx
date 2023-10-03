import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
