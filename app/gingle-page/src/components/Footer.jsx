import logo from "../assets/filmstv.jpg";
const Footer = () => {
  return (
    <footer className="footer px-4 lg:px-28 sm:footer-horizontal text-gray-300 p-10">
      <aside>
        <a
          download
          href="/filmstv.jpg"
          target="_blank"
          rel="noopener noreferrer"
          to="/"
        >
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
        </a>
        <p>
          Films Tv Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
