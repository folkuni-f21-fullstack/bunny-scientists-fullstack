import "./HomePage.scss";
import MenuNav from "../../components/MenuNav/MenuNav";
import Hero from "../../components/Hero/Hero"

const HomePage = () => {
  return (
    <main className="home-page">
      <Hero/>
      <MenuNav/>
      <h2 id="food">Mat</h2>
      <section className="cards-container">
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
      <h2 id="kids">Barn</h2>
      <section className="cards-container">
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
      <h2 id="beverages">Dryck</h2>
      <section className="cards-container">
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
      <h2 id="desserts">Efterätter</h2>
      <section className="cards-container">
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
