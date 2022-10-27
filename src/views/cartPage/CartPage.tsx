import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import decrease from '../../assets/icons/decrease-icon.svg';
import increase from '../../assets/icons/increase-icon.svg';
import trash from '../../assets/icons/trash-icon.svg';
import { useNavigate } from 'react-router-dom';
import {
  decrementQuantity,
  incrementQuantity,
  removeAll,
  removeItem
} from '../../reducers/cartReducer';
import { RootState } from '../../store';
import './CartPage.scss';

const CartPage = () => {
	const dispatch = useDispatch();
  const navigate = useNavigate();
	// diplay amount of articles in cart
	const productList = useSelector((state: RootState) => state.cart);
	console.log(productList);

const sendMail: (e: any) => void = (e: any) => {
  e.preventDefault();
    if (productList.length > 0){
      navigate('/confirmed');
      dispatch(removeAll())
    } else {
      console.log('empty shit')
    }
  }



  
	return (
		<div className='cart-wrapper'>
			<section className='cart-header'>
				<h1>Kassa</h1>
				<p>
					<b>varukorg - kassa</b> - bekräftat
				</p>
			</section>
			<div className='line'></div>
			<main>
				<ul className='selected-products'>
          {productList.map((item, id) => {
            return (
              <li key={id} className='product-in-cart'>
                <div className='product'>
                  <figure
                    onClick={() => dispatch(removeItem(item))}
                    className='trash'>
                    <img src={trash} alt='' />
                  </figure>
                  <div className='product-item'>
                    <h3>{item.menuItem.name}</h3>
                    <p>{item.menuItem.price} kr</p>
                  </div>
                </div>
                <div className='amount'>
                  <div className='add-remove-container'>
                            <figure
                      onClick={() =>
                        dispatch(decrementQuantity(item))
                      }
                      className='amount-button'>
                      <img src={decrease} alt='' />
                            </figure>
                    <p>{item.amount}</p>
                            <figure
                      onClick={() =>
                        dispatch(incrementQuantity(item))
                      }
                      className='amount-button'>
                      <img src={increase} alt='' />
                            </figure>
                  </div>
                  <p>{item.amount * item.menuItem.price} kr</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className='line'></div>
        <section className='form'>
          <form onSubmit={sendMail} className="contact-form">
            <label htmlFor="name">namn</label>
            <input type="text" id='name' />
            <label htmlFor="number">telefonnummer</label>
            <input type="text" id="number" />
            <label htmlFor="message">meddelande</label>
            <textarea id='message' placeholder='Lämna meddelande till resturangen' cols={20} rows={6}> </textarea>
            <input className='submit-button' type="submit" value="Slutför köp" />
          </form>
          <div>
            <h2>
              summa:{productList.reduce((total, currentItem) =>(total = total + currentItem.menuItem.price * currentItem.amount), 0)}.00 kr
            </h2>
            <p onClick={() => dispatch(removeAll())}>Töm varukorgen</p>
          </div>
        </section>
			</main>
		</div>
	);
};

export default CartPage;
