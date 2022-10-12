import "./Hero.scss"
import "./assets/escargot-hero.jpg"
import Escargot from "../../assets/escargot-hero.jpg";
// import "./src/assetcs/escargot-hero.jpg"

const Header = () => {
  return (
    <figure>
        <img src={Escargot} alt="" />
    </figure>
  )
}

export default Header
