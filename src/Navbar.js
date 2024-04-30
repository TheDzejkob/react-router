import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Domů</Link></li>
        <li><Link to="/monday">Pondělí</Link></li>
        <li><Link to="/tuesday">Úterý</Link></li>
        <li><Link to="/wednesday">Středa</Link></li>
        <li><Link to="/thursday">Čtvrtek</Link></li>
        <li><Link to="/friday">Pátek</Link></li>
        <li><Link to="/add">Přidat hodinu</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
