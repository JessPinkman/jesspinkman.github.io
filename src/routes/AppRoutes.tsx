import { Switch, Route } from "react-router-dom";
import links, { homeLink } from "./links";

const AppRoutes = () => {
  return (
    <Switch>
      {links.map((link) => (
        <Route path={link.to} key={link.to} component={link.Render} exact />
      ))}
      <Route path="*" component={homeLink.Render} />
    </Switch>
  );
};

export default AppRoutes;
