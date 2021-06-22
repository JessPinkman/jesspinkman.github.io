import "./style/app.scss";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import links from "./routes/links";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar>
        {links
          .filter((link) => link.inMenu)
          .map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`depends_on_responsive nav_menu_link ${
                location.pathname === link.to ? "active" : null
              }`}
            >
              {link.label}
            </Link>
          ))}
      </NavBar>
      <main>
        <Switch>
          {links.map((link) => (
            <Route path={link.to} key={link.to} exact>
              <link.Render />
            </Route>
          ))}
        </Switch>
      </main>
      <footer />
    </>
  );
}

export default App;
