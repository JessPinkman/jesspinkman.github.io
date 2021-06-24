import { Link } from "react-router-dom";
import { backgroundLink, skillLink } from "../links";

const Home = () => {
  return (
    <div className="route__home">
      <div className="route__home_grid">
        <div className="route__home_grid_tile">
          <h1 className="route__home_grid_title">{skillLink.label}</h1>
          <Link to={skillLink.to}>
            <img src="/img/skills.png" alt="" className="route__home_grid_bg" />
          </Link>
        </div>
        <div className="route__home_grid_tile">
          <h1 className="route__home_grid_title">{backgroundLink.label}</h1>
          <Link to={backgroundLink.to}>
            <img
              src="/img/history.png"
              alt=""
              className="route__home_grid_bg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
