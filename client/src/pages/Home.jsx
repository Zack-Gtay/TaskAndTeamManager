import { Link } from "react-router-dom";
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="">
      <Header/>
      <Link to="log-in">Login</Link>
      <Link to="sign-up">Signup</Link>
    </div>
  );
};

export default Home;
