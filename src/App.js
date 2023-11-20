//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

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
        <link to="/">About</link>
        <link to="/work">Work</link>
        <link to="/portfolio">Portfolio</link>
        <link to="/contact">Contact</link>
      </ul>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" elment={<Contact />} />
      </Routes>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <About />
      <Work />
      <Portfolio />
    </main>
  );
}

function About() {
  return (
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, nulla cursus vehicula lacinia, leo erat interdum augue, nec maximus libero lectus id leo. Curabitur justo sapien, luctus non velit a, scelerisque eleifend arcu. Nullam vel augue id odio feugiat blandit. Praesent scelerisque mi enim. Quisque eu efficitur quam, eget ultricies nunc. Aliquam convallis imperdiet est, ac porta orci faucibus sit amet. Suspendisse cursus pellentesque risus, a rutrum turpis consectetur vitae. Donec ornare elit quam, suscipit eleifend metus rutrum sit amet. Duis tincidunt semper tortor non tempus. Etiam mollis sagittis imperdiet.</p>
      <p>Suspendisse suscipit suscipit odio, at porta odio. Mauris consequat nunc enim, nec tempor libero tempor id. Morbi dictum volutpat lacus sollicitudin interdum. Integer a congue nisi. Etiam venenatis tellus a mattis ullamcorper. Ut elit enim, egestas fringilla ultrices at, semper quis sem. Aliquam est orci, ullamcorper quis porta ut, posuere id sem. Proin ullamcorper ante nec mauris lobortis, ut varius ligula rhoncus.</p>
      <p>Vestibulum posuere ipsum a tellus commodo dictum. Donec volutpat sed turpis eu sagittis. Quisque sed velit venenatis, euismod lacus sed, viverra quam. Fusce eu ipsum tempor, finibus risus in, feugiat erat. Pellentesque ut tincidunt nibh. Integer dictum sit amet urna a lacinia. Nam quam tellus, placerat eu pellentesque in, fermentum pellentesque libero. Nunc in tortor id ex blandit ultrices. Donec eleifend dolor vitae diam scelerisque aliquet. Donec ultricies tempus purus pellentesque varius. Vivamus luctus magna ut turpis placerat, quis tincidunt metus fringilla. Duis id lacus nec augue aliquam consectetur.</p>
    </section>
  );
}

function Work() {
  return (
    <section>

    </section>
  );
}

function Portfolio() {
  return (
    <section>
    </section>
  );
}

function Contact() {
  return (
    <></>
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
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
