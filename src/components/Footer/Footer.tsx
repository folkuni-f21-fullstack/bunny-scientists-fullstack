import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
} from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import data from '../../data/data.json';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<article>
				<section>
					<h2>Kontakt</h2>
					<ul>
						<li>Telefon: {data.array.restaurant.phone}</li>
						<li>Adress: {data.array.restaurant.address}</li>
					</ul>
				</section>
				<section>
					<h2>Sociala medier</h2>
					<ul className='socials'>
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
			</article>
			<a href=''>
				Admin inlog <BiLogIn />
			</a>
			<p>© 2022 All rights reserved Escargot Togo</p>
		</footer>
	);
};

export default Footer;
