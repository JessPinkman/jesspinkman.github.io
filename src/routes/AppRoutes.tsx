import { Routes, Route } from "react-router-dom";
import links, { homeLink } from "./links";

const AppRoutes = () => {
  return (
    <Routes>
      {links.map((link) => (
        <Route path={link.to} key={link.to} element={link.Render()} />
      ))}
      <Route path="*" element={homeLink.Render()} />
    </Routes>
  );
};

export default AppRoutes;
