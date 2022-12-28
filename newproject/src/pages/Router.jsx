import { Outlet, Link } from "react-router-dom";

//React router added after two components to better the viewing experience of the site.
export const Router = () => {
  return (
    <>
    {/*The router has the links themselves, they all follow the same rule, Link to="" sets the url and names are the visible links.*/}
    <div>
      <nav className="nav">
        <ul className="navlist">
          <li className="navlink">
            <Link to="/">Home🏠 </Link>
          </li>
          <li className="navlink">
            <Link to="/button">Buttons🔘</Link>
          </li>
          <li className="navlink">
            <Link to="/counters">Counters⌛</Link>
          </li>
          <li className="navlink">
            <Link to="/items">Items📄</Link>
          </li>
          <li className="navlink">
            <Link to="/list">List📝</Link>
          </li>
          <li className="navlink">
            <Link to="/tictactoe">❌/⭕</Link>
          </li>
        </ul>
      </nav>
    </div>
      {/*Outlet renders the current route selected.*/}
      <Outlet />
    </>
  )
};
