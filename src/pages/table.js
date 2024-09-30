import React from "react";
import { NavLink } from "react-router-dom";

const Table = () => {
    return(
        <>
            <div className="mainTable">
                <div className="table-txt">
                    <h2>Table View </h2>
                    <hr></hr>
                </div>
                <div className="ground-floor">
                    <p>Ground Floor</p>
                </div>
                <div className="main-box">
                    <div className="box">
                        <button className="boxes">
                            1
                        </button>
                        <button className="boxes">
                            2
                        </button>
                        <button className="boxes">
                            3
                        </button>
                        <button className="boxes">
                            4
                        </button>
                        <button className="boxes">
                            5
                        </button>
                        <button className="boxes">
                            6
                        </button>
                        <button className="boxes">
                            7
                        </button>
                        <button className="boxes">
                            8
                        </button>
                        <button className="boxes">
                            9
                        </button>
                        <button className="boxes">
                            10
                        </button>
                    </div>
                </div>
                <div className="party-floor">
                    <p>Party Hall</p>
                </div>
                <div className="party-main-box">
                    <div className="party-box">
                        <button className="party-boxes">
                            1
                        </button>
                        <button className="party-boxes">
                            2
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;