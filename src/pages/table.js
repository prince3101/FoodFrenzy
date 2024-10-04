import React from "react";
import { NavLink } from "react-router-dom";

const Table = () => {
  return (
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
            <NavLink to="/inventory" className="link">
              <button className="boxes">1</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">2</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">3</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">4</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">5</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">6</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">7</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">8</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">9</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="boxes">10</button>
            </NavLink>
          </div>
        </div>
        <div className="party-floor">
          <p>Party Hall</p>
        </div>
        <div className="party-main-box">
          <div className="party-box">
            <NavLink to="/inventory" className="link">
              <button className="party-boxes">1</button>
            </NavLink>
            <NavLink to="/inventory" className="link">
              <button className="party-boxes">2</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
