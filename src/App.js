import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Fotter/Footer"
function App() {
  return (
    <>
      <div className="app-header">
        <Header />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
