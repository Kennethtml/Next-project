import { NavLink, Outlet} from "react-router-dom";
export default function Navigation(){
    return (
      <>
        <ul>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="About">About</NavLink>
          <NavLink to="Products">Products</NavLink>
          <NavLink to="signIn">signIn</NavLink>
        </ul>
        <Outlet />
      </>
    );
}