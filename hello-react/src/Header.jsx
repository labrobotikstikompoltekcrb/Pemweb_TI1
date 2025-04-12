import React, {useState} from "react";
function Header() {
const state = useState("Ini judul dari State");
          return (
        <div> 
          <h2>Makanan Khas Indonesia</h2>
          <h3>{state}</h3>
        </div>
      );
    } 
  
  export default Header