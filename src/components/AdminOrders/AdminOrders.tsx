import cors from 'cors';
import { useEffect, useState } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import Data from '../../data/data.json';
import { Order } from '../../models/data';
import './AdminOrders.scss';

const AdminOrders = () => {
	const [allOrders, setAllOrders] = useState<Order[]>([
		{
			orderNumber: 231354,
			orderItems: [
				{
					menuItem: {
						id: '200',
						name: 'Tradition',
						price: 149,
						description:
							'Autentiskt franskt lantrecept på escargots med persilja, vitlök och smör',
						image: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/img_7379-snails.jpg',
					},
					amount: 2,
				},
			],
			customerComment: 'HEY ',
			customer: 'Jesus',
			phoneNumber: 57357357,
		},
	]);

	const [isSelected, setIsSelected] = useState<any>({
		id: allOrders[0].orderNumber,
	});

	const selectedOrder: Order = {
		orderNumber: 1,
		orderItems: [],
		customerComment: '',
		customer: '',
		phoneNumber: 0,
	};

	const allEscargotsInMenu = Data.array.menu[0].menuItems;
	const allKidsInMenu = Data.array.menu[1].menuItems;
	const allDrinksInMenu = Data.array.menu[2].menuItems;
	const allDessertsInMenu = Data.array.menu[3].menuItems;

	const fetchOrders = async () => {
		const response = await fetch('/api/orders', {
			mode: 'cors',
		});
		console.log('response', response); //ERROR, why?
		const data: Order[] = await response.json();
		console.log('data', data);
		// console.log("data", data)
		setAllOrders(data);
	};

	useEffect(() => {
		// fetch('http://localhost:1337/api/orders')
		// 	.then(response => response.json())
		// 	.then(setAllOrders)
		// 	.catch(() => console.log('error'));
		fetchOrders();
	}, []);

	return (
		<div className='admin-wrapper'>
			<section className='orders-list'>
				<ul>
					{allOrders.map((order: Order, i: number) => {
						return (
							<li
								key={i}
								className={
									order.orderNumber === isSelected
										? 'selected'
										: ''
								}
								onClick={() => {
									setIsSelected(order.orderNumber);
								}}>
								{order.orderNumber}
							</li>
						);
					})}
				</ul>
			</section>
			<div className='line'></div>
			<section className='order-details'>
				{selectedOrder.orderItems.map((order, i: number) => {
					return (
						<article key={i} className='order-detail-item'>
							<p>{order.menuItem.name}</p>
							<div className='quantity-container'>
								<button className='decrease'>
									{' '}
									<IoIosRemove />
								</button>
								<p className='quantity'>{order.amount}</p>
								<button className='decrease'>
									{' '}
									<IoIosAdd />
								</button>
							</div>
						</article>
					);
				})}
			</section>
			<h2 className='subheading'>Kundinformation</h2>
			<section className='customer-info'>
				<p>
					Meddelande från beställare:
					<span className='message'>
						{selectedOrder.customerComment}
					</span>
				</p>
				<p>
					Kund: <span>{selectedOrder.customer}</span>
				</p>
				<p>
					Telefon: <span>{selectedOrder.phoneNumber}</span>
				</p>
			</section>
			<h2 className='subheading'>Lägg till maträtt</h2>
			<section className='add-to-order-container'>
				{allEscargotsInMenu.map((order: any, i: number) => {
					return (
						<div key={i}>
							<p>{order.name}</p>
							<button>
								{' '}
								<IoIosAdd />
							</button>
						</div>
					);
				})}
				{allKidsInMenu.map((order: any, i: number) => {
					return (
						<div key={i}>
							<p>{order.name}</p>
							<button>
								<IoIosAdd />{' '}
							</button>
						</div>
					);
				})}
				{allDrinksInMenu.map((order: any, i: number) => {
					return (
						<div key={i}>
							<p>{order.name}</p>
							<button>
								{' '}
								<IoIosAdd />
							</button>
						</div>
					);
				})}
				{allDessertsInMenu.map((order: any, i: number) => {
					return (
						<div key={i}>
							<p>{order.name}</p>
							<button>
								{' '}
								<IoIosAdd />
							</button>
						</div>
					);
				})}
			</section>
			<h2 className='subheading'>Meddelande till kocken</h2>
			<section className='message-to-chef'>
				<form action=''>
					<textarea name='' id='' cols={40} rows={5}></textarea>
				</form>
			</section>

			<button className='confirm-btn'>Bekräfta</button>
		</div>
	);
};

export default AdminOrders;
