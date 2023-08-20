import { Link, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import links from "./routes/links";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-inactive text-white">
      <NavBar>
        {links
          .filter((link) => link.inMenu)
          .map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                location.pathname === link.to
                  ? "contrast-150 saturate-150"
                  : "hover:contrast-125 contrast-75"
              }`}
            >
              {link.label}
            </Link>
          ))}
      </NavBar>
      <main className="p-8 flex-1">
        <AppRoutes />
      </main>
      <footer />
    </div>
  );
}

export default App;
