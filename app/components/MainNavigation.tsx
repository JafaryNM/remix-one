import { NavLink } from '@remix-run/react';

// Navlink is similar to previous link but it receive some active features

function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notes">My Notes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;