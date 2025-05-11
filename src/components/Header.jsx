import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <nav id="mainHeader">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userlist">Userlist</Link>
            </li>
            <li>
              <Link to="/add-user">Add user</Link>
            </li>          
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Header;