import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const NavBar = ({ children }: IProps) => {
  const navRef = useRef<HTMLElement>(null!);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      navRef.current.classList.add("show");
      new Promise((resolve, reject) => {
        document
          .querySelectorAll(".nav_menu_link")
          .forEach((b) => b.addEventListener("click", resolve));
        document.addEventListener("scroll", resolve);
      })
        .then(() => {
          setShow(false);
        })
        .catch(() => {
          setShow(false);
        });
    } else {
      navRef.current.classList.remove("show");
    }
  }, [show]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav_logo">
        <Link to="/">
          <img src="/img/self.jpg" alt="serge goncalves" className="logo-img" />
        </Link>
      </div>
      <Btn handleClick={() => setShow((p) => !p)} />
      <div className="nav_menu">{children}</div>
    </nav>
  );
};

const Btn = ({ handleClick }: { handleClick: () => void }) => (
  <button className="nav_btn" onClick={handleClick}>
    <div>
      <div />
      <div />
      <div />
      <div />
    </div>
  </button>
);

export default NavBar;
