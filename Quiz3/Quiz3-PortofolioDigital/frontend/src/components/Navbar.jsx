import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>242310029</h2>
        <span>Rifcky Bayu Bachtriar</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ThemeToggle />

    </nav>
  );
}

export default Navbar;