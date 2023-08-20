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
      const links = document.querySelectorAll(".nav_menu_link");
      const linkList = Array.from(links.values());
      const scrollEvent = new Promise((resolve) =>
        document.addEventListener("scroll", resolve)
      );
      const linkPromises = linkList.map(
        (link) =>
          new Promise((resolve) => link.addEventListener("click", resolve))
      );
      Promise.race([...linkPromises, scrollEvent]).finally(() =>
        setShow(false)
      );
    } else {
      navRef.current.classList.remove("show");
    }
  }, [show]);

  return (
    <nav
      className="flex flex-row h-20 overflow-hidden bg-primary text-secondary font-extrabold items-center px-12 gap-4 border-b-2 border-white shadow-md"
      ref={navRef}
    >
      <div className="rounded-full w-16 h-16 overflow-hidden hover:brightness-110">
        <Link to="/">
          <img src="/img/self.jpg" alt="serge goncalves" className="logo-img" />
        </Link>
      </div>
      <Btn handleClick={() => setShow((p) => !p)} />
      <div className="flex-1 flex gap-12 justify-center uppercase">
        {children}
      </div>
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
