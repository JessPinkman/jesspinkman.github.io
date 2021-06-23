import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="route__home">
      <div className="route__home_grid">
        <div className="route__home_grid_tile">
          <h1 className="route__home_grid_title">Skills</h1>
          <Link to="/skills">
            <img src="/img/skills.png" alt="" className="route__home_grid_bg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
