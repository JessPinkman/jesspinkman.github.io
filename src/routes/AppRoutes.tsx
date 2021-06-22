import { Switch, Route } from "react-router-dom";
import links from "./links";

const AppRoutes = () => {
  return (
    <Switch>
      {links.map((link) => (
        <Route path={link.to} key={link.to} exact>
          <link.Render />
        </Route>
      ))}
      <Route path="/">Home</Route>
    </Switch>
  );
};

export default AppRoutes;
