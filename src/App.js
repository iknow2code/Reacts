import React from "react";
import Header from "./components/Header/Header";
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header/>
      <div className="form-data">
        <Form/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
