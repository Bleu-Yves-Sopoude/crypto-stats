import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar">
    <button aria-label="Button with Icon" type="button" onClick={() => window.history.back()} className="back-btn">&lt;&nbsp;Back</button>

    

    <p>
      Crypto Stats
    </p>
    <div className="lastmenu">
      <FaMicrophone style={{ fill: '#fff' }} />
      <AiFillSetting style={{ fill: '#fff' }} />
    </div>
  </div>
);

export default Navbar;