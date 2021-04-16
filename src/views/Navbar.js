import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Vynca</h1>
      <div className="links">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;