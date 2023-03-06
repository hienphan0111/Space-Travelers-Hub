import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/planet.svg';
import './styles.components/NavBar.styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bar">
        <div className="logo">
          <Logo className="logo-img" />
          <h1>Space Travelers' Hub</h1>
        </div>
        <div className="menu">
          <Link className="link" to='/'>Rockets</Link>
          <Link className="link" to='/mission'>Missions</Link>
          <Link className="link" to='/my-profile'>My Profile</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
