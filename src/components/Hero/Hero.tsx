import "./Hero.scss"
import Escargot from "../../assets/escargot-hero.jpg"

const Header = () => {
    return (
        <figure className="hero-wrapper">
            <img src={Escargot} alt="" />
            <figcaption>Slemmigt bättre</figcaption>
        </figure>
    )
}

export default Header
