import Escargot from '../../assets/escargot-hero.jpg';
import './Hero.scss';

const Hero = () => {
	return (
		<figure className='hero-wrapper'>
			<img src={Escargot} alt='' />
			<figcaption>Slemmigt bättre</figcaption>
			<div id='sniglar'></div>
		</figure>
	);
};

export default Hero;
