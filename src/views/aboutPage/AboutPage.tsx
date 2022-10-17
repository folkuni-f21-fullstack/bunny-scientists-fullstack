import "../aboutPage/AboutPage.scss";
import VD from "../../assets/staff/vd.jpg"
import Reception from "../../assets/staff/reception.jpg"
import Chef from "../../assets/staff/chef.jpg"
import data from '../../data/data.json'

const AboutPage = () => {
  return (
    <main className="about-main">
      <h1 className="about-header">Om oss</h1>
      <div className="line"></div>
      <p>Escargot-togo är den första snigelrestaurangen i Sverige som erbjuder takeaway till rimliga priser.</p>
      <p>Vi öppnade våra dörrar till restaurangen år 2018 där vi möttes av omedelbar och stor framgång. </p>
      <p>Efter att vi besöktes av självaste Konungen och drottning Silvia första gången bestämde vi oss för att bannlysa dem från verksamheten, sänka våra priser och få sniglar in i munnen på vanligt folk.</p>
      <h2 className="contact">Kontakt</h2>
      <p>{data.array.restaurant.address}</p>
      <p>{data.array.restaurant.phone}</p>
      <p>{data.array.restaurant.mail}</p>
      <div className="line"></div>
      <section className="staff">
        <div>
          <img src={Reception} alt="Reception" />
          <h2>Reception</h2>
          <p className="name">Kim-Yun Lee</p>
        </div>
        <div>
          <img src={VD} alt="VD" className="middle-img" />
          <h2>VD</h2>
          <p className="name">Jaques Fleur de Baguette</p>
        </div>
        <div>
          <img src={Chef} alt="Chef" />
          <h2>Chef</h2>
          <p className="name">Alexander Bombax</p>
        </div>
      </section>
    </main>
  )
};

export default AboutPage;
