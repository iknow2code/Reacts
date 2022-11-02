import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div className="app-header">
        <Header />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
