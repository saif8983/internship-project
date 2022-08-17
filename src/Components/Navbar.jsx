import React from "react";
import "../App.css"
import { IconsSrc } from "../Constant";
const Navbar = () => {

    return (
        <>
            <div class="main-navbar">
                <div class="left-navbar">
                    <div className="left-navbar-image"  ></div>
                    <div className="left-title-navbar"><h3>Dezzie</h3></div>
                </div>
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
