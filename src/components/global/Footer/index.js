import Logo from "./Logo";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import nav from "data/footerNav.json";

const socialMedia = [
  {
    icon: <BsFacebook />,
    url: "https://www.facebook.com/pickmeupngr",
  },
  {
    icon: <BsTwitter />,
    url: "https://twitter.com/pickmeupng",
  },
  {
    icon: <BsInstagram />,
    url: "https://www.instagram.com/pickmeupng/",
  },
  {
    icon: <BsYoutube />,
    url: "https://www.youtube.com/channel/UCqtPHk26hwUqFiBlshyYJUw",
  },
];

function Footer() {
  return (
    <footer className="Footer w-full flex items-center justify-center">
      <div className="Footer-wrapper wrapper flex items-start justify-between">
        <div className="flex flex-col items-start">
          <Logo />
          <p>The smartest way to move around in your city!</p>
          <div className="Footer-sm flex items-center col-gap">
            <span>Follow us on</span>
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
    </footer>
  );
}

export default Footer;
