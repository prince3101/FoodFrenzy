import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Inventory = () => {

    const [screen,setScreen] = useState("");

    return(
        <>
            <div className="in-head">
                <div className="FastFood">
                    <h5>FastFood</h5>
                </div>
                <div className="input-in">
                    <input type="search" placeholder="Search Items"></input>
                </div>
                <div className="input-in">
                    <input type="search" placeholder="Search Code"></input>
                </div>
            </div>
        </>
    )
}

export default Inventory;