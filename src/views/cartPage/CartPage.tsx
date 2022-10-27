import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './CartPage.scss';

const CartPage = () => {
	const dispatch = useDispatch();
	// diplay amount of articles in cart
	const productList = useSelector((state: RootState) => state.cart);
	console.log(productList);
	return (
		<div className='cart-wrapper'>
			<section className='cart-header'>
				<h1>Kassa</h1>
				<p>
					<b>varukorg - kassa</b> - bekräftat
				</p>
			</section>
			<main>
				{/* {
          productList.
        } */}
			</main>
		</div>
	);
};

export default CartPage;
