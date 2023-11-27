//import logo from './logo.svg';
import './App.css';
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Work from "./Work"
import { Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <header>
      <h1 class="display-2">David Ugale</h1>
      <h3>Full Stack Developer</h3>
      <p class="text-white-50">Long Beach, CA</p>
    </header>
  );
}

function Nav() {
  return (
    <nav class="mt-5">
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
            <MenuLink to="/" name="About" />
        </li>
        <li class="nav-item mb-2">
            <MenuLink to="/skills" name="Skills" />
        </li>
        <li class="nav-item mb-2">
            <MenuLink to="/work" name="Work Experience" />
        </li>
        <li class="nav-item mb-2">
            <MenuLink to="/portfolio" name="Portfolio" />
        </li>
        <li class="nav-item mb-2">
            <MenuLink to="/contact" name="Contact" />
        </li>
      </ul>
    </nav>
  );
}

function MenuLink(props) {
    /*
    <Link to={props.to} class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover">{props.name}</Link>
    */
    let defaultClasses = "link-light link-offset-2 link-underline-opacity-0";
    let notActive = defaultClasses + " text-secondary-emphasis";
    let active = defaultClasses + " fw-bold text-white";
    return (
        <NavLink to={props.to} className={({ isActive }) => 
            isActive ? active : notActive
        }
        >{props.name}</NavLink>
    )
}

function Main() {
  return (
    <main class="pt-4 text-secondary-emphasis">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
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
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-5">
          <Header />
          <Nav />
        </div>
        <div class="col-md-7">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
