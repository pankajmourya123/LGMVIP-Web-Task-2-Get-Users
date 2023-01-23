import React from "react";
import { FaUser } from "react-icons/fa";


const Header = (props) => {
  return (
    <nav>
        <div className="left">
        <a href="/">LGMVIP</a>
      </div>
      <div className="right">
      <button onClick={props.data} id="getData">
          Get Users <FaUser />
        </button>
      </div>
 
      
    </nav>
  );
};

export default Header;