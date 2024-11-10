import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu.js";

const Inventory = () => {

    const[menuData, setMenuData] = useState(Menu);


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

            <section>
                <ul>
                    {menuData.map ((curelm) => {
                        return (<li key={curelm.id}>
                            <p>{curelm.name}</p>
                            <span>{curelm.price}</span>
                        </li>)

                    })}
                </ul>
            </section>
        </>
    )
}

export default Inventory;