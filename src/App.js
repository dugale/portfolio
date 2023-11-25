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
      <dl>
        <dt>Front-End</dt>
        <dd>JavaScript, TypeScript, React, HTML, CSS, SCSS/SASS</dd>
        <dt>Back-End</dt>
        <dd>Python, PHP</dd>
        <dt>Frameworks and CMS</dt>
        <dd>Django, Laravel, WordPress</dd>
        <dt>Databases</dt>
        <dd>MySQL, PostgreSQL</dd>
        <dt>API</dt>
        <dd>REST, Django Rest Framework, JSON</dd>
        <dt>DevOps</dt>
        <dd>AWS, Git, GitHub</dd>
        <dt>Project Management</dt>
        <dd>Agile, Scrum</dd>
      </dl>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link to="/">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/work">Work</Link>
        </li>
        <li class="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
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
