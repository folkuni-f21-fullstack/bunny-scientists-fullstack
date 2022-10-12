import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <article>
        <section>
          <h2>Kontakt</h2>
          <ul>
            <li>Telefon: 070 999 99 99</li>
            <li>Adress: Idagatan</li>
          </ul>
        </section>
        <section>
          <h2>Sociala medier</h2>
          <ul className="socials">
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
          </ul>
        </section>
        <a href="">
          Admin inlog <BiLogIn />
        </a>
        <p>© 2022 All rights reserved Escargot Togo</p>
      </article>
    </footer>
  );
};

export default Footer;
