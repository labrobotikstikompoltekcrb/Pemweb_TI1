// Import Libraries
import React from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
// Create Component
const App = () => {
  return (
    <div className="App"> 
    <Header />
     
      <List />
      <Footer />
      </div >
    

  );
};
// Export Default
export default App;