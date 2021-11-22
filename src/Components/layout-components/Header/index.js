import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="fixed top-0 z-50 w-full bg-gray-200 h-44 flex justify-center border shadow-sm">
      <Link to="./home">
        <div className="flex h-44 items-center">
          <img src="https://i.hizliresim.com/9x37vh6.png"></img>
        </div>
      </Link>
    </div>
  );
};

export default Header;
