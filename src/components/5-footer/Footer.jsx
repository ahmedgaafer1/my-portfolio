import "./footer.css";

function Footer() {
  return (
    <footer className="footer flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#">Speaking</a>
        </li>
        <li>
          <a href="#">Uses</a>
        </li>
      </ul>
      <p className="subtitle">
        © 2021 - {new Date().getFullYear()} | Built with React.js and CSS by{" "}
        {"Ahmed Gaafer"}
      </p>
    </footer>
  );
}

export default Footer;
