 import Nav from './Nav';
 import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container1">
          <Nav />

        <section className="center">
          <h2>Welcome To Online Api Tester</h2>
          <p className="wid mt-3">
            <span>
              Test API with Online REST API Client. Online Api Tester is the
              most popular Online REST API testing tool.
            </span>
            You can quickly and easily test your API
          </p>
          <button className="btn btn-primary mt-3">
            <Link to="/tester" className="link">
              Get Started
            </Link>
          </button>
        </section>
      </div>
    </>
  );
};
export default Home;
