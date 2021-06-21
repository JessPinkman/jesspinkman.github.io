import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import links from "./routes/links";

function App() {
  return (
    <Router>
      <NavBar>
        {links
          .filter((link) => link.inMenu)
          .map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="depends_on_responsive nav_menu_link"
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
    </Router>
  );
}

export default App;
