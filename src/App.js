//import logo from './logo.svg';
import './App.css';
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Work from "./Work"
import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <header>
      <h1>David Ugale</h1>
      <h2>Full Stack Developer</h2>
      <p>Website Development</p>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function Footer() {
  return (
    <footer>

    </footer>
  );
}

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <Header />
          <Nav />
        </div>
        <div class="col">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
