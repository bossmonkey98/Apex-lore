import "./Home.css";
import { links } from "./temp";

const Home = () => {
  return (
    <div className="home">
      {links.map((item) => (
        <div>{item.link}</div>
      ))}
    </div>
  );
};

export default Home;
