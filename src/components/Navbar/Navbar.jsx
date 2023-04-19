import React from 'react'
import images from '../../constants';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="sticky">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={images.icon} alt="navbar_icon" />
          </div>
          <div >
          <button
            className="inscricao_nav">
                <a href='https://lu.ma/everything.fi'  rel="noreferrer" target={"_blank"} >Inscrições
                    </a>
                </button>
          </div>
          {/* <div className="navbar-pt-en">
            <a href='/#' style={{ fontWeight: 500, borderBottom: "1px solid white" }}>PT</a>
            <a href='/#'>EN</a>
          </div> */}
        </nav>
    </div>
  );
};

export default Navbar