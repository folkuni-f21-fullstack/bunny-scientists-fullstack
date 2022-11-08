export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type OrderType = {
  orderNumber: number;
  order: CartItem[];
};

export type CartItem = {
  menuItem: MenuItem;
  amount: number;
};

export type OrderItem = {
  menuItem: MenuItem;
  amount: number;
};

export type Order = {
  time: string,
  orderNumber: number;
  orderItems: OrderItem[];
  customerComment: string;
  customer: string;
  phoneNumber: string;
};

export type ArchiveItem = {
  orderNumber: number;
  orderItems: OrderItem[];
  customerComment: string;
  customer: string;
  phoneNumber: string;
  time: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  menuItems: MenuItem[];
};

export type Credentials = {
  username: string;
  password: string;
};
