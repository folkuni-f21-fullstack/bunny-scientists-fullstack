export type Order = {
  orderNumber: string;
  orderItems: OrderItem[];
  customerComment: string;
  customer: string;
  phoneNumber: string;
};

export type OrderItem = {
  menuItem: MenuItems;
  amount: number;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type Credentials = {
  username: string;
  password: string;
};

export type Menu = {
  id: string;
  name: string;
  menuItems: MenuItems[];
};

export type MenuItems = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Schema = {
  baseOrderNumber: string;
  orders: Order[];
  archive: ArchiveItem[];
  credentials: Credentials[];
  menu: Menu[];
};

export type ArchiveItem = {
  orderNumber: number,
  orderItems: OrderItem[],
  customerComment: string,
  customer: string,
  phoneNumber: string,
  time: string,
  messageToChef: string
};
