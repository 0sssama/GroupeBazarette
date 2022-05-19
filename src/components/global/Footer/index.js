import { LogoLight } from "components";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import nav from "data/footerNav.json";

const socialMedia = [
  {
    icon: <BsFacebook />,
    url: "/",
  },
  {
    icon: <BsTwitter />,
    url: "/",
  },
  {
    icon: <BsInstagram />,
    url: "/",
  },
  {
    icon: <BsYoutube />,
    url: "/",
  },
];

function Footer() {
  return (
    <footer className="Footer w-full flex flex-col items-center justify-center">
      <div className="Footer-wrapper wrapper flex items-start justify-between">
        <div className="flex flex-col items-start">
          <LogoLight />
          <p className="footer-title">
            Optez pour notre style, qualité et prix!
          </p>
          <div className="Footer-sm flex items-center col-gap">
            <span>Suivez-nous sur</span>
            <div className="Footer-sm-icons flex items-center col-gap">
              {socialMedia.map((item, i) => (
                <a
                  href={item.url}
                  className="white no-line"
                  target="_blank"
                  rel="noreferrer noopener"
                  key={i}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="Footer-navigation flex items-start justify-between">
          {nav.map((item, i) => (
            <div className="column flex flex-col" key={i}>
              <h4>{item.title}</h4>
              {item.links.map((link, index) => (
                <div className="link" key={index}>
                  <Link href={link.url}>
                    <a className="white">{link.title}</a>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="line w-full"></div>
      <div className="Footer-bottom wrapper flex flex-col items-center row-gap col-gap justify-center">
        <p>© 2022 Groupe Bazarette</p>
        <div className="flex align-center col-gap">
          <Link href="/">
            <a className="white">Privacy Policy</a>
          </Link>
          <p>|</p>
          <Link href="/">
            <a className="white">Terms of Use</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
