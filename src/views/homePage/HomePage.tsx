import "./HomePage.scss";
import MenuNav from "../../components/MenuNav/MenuNav";
import Hero from "../../components/Hero/Hero"

const HomePage = () => {
  return (
    <main className="home-page">
      <Hero/>
      <MenuNav/>
      <section className="cards-container">
        <h2 id="food">Mat</h2>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
      </section>
      <section className="cards-container">
        <h2 id="kids">Barn</h2>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
      </section>
      
      <section className="cards-container">
        <h2 id="beverages">Dryck</h2>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
      </section>
      <section className="cards-container">
        <h2 id="desserts">Efterätter</h2>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
        <article>Här är olika prylar</article>
      </section>
    </main>
  )
};

export default HomePage;
