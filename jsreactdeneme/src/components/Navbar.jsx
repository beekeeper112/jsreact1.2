import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Ana Sayfa</Link>
    <Link to="/hakkinda">Hakkında</Link>
    <Link to="/kullanicilar">Kullanıcılar</Link>
  </nav>
);

export default Navbar;
