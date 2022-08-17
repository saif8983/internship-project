import React from "react";
import "../App.css"
import IconsSrc from "../utils/icons";
//navbar components
const Navbar = () => {

  return (
    //structure of navbar which alingment done by flex
    <>
      <div class="main-navbar">
        {/*left navebar section which gap and alignment main by flex */}
        <div class="left-navbar">
          <div className="left-navbar-image"  ></div>
          <div className="left-title-navbar"><h3>Dezzie</h3></div>
        </div>
        {/*right navebar section which gap and alignment main by flex*/}
        <div class="right-navbar">
          <img src={IconsSrc.Bell} alt="no icon"></img>
          <div className="right-navbar-image"></div>
          <div>
            <div className="right-title-navbar">Sumanto</div>
            <div className="navbar-cashier">Cashier</div>
          </div>
        </div>
      </div>
    </>

  );

}

export default Navbar
