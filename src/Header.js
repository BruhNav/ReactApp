import React from "react";

const Header=()=>{
    return(
        <div className="header "> 
        <span className="title">Build a solution<span className="dropdown float-right">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            </button>
          </span></span> 
          <a href="/" className="infoTag">info</a>
        
    </div >
    )
}

export default Header;