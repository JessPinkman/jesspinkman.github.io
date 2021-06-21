import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const NavBar = ({ children }: IProps) => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-responsive" />
      <div className="nav_logo">
        <Link to="/">
          <img src="/img/self.jpg" alt="serge goncalves" className="logo-img" />
        </Link>
      </div>
      <Btn />
      <div className="nav_menu">{children}</div>
    </nav>
  );
};

const Btn = () => (
  <label htmlFor="nav-responsive" className="nav_responsive_label">
    <div className="nav_btn depends_on_responsive">
      <div />
      <div />
      <div />
      <div />
    </div>
  </label>
);

export default NavBar;
