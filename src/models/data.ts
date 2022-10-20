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

/*
              Hur state ska se ut:
        1. Vad ligger i kundvagnen.
        2. Administratören behöver kunna se Vilka Orders som har lagts.
        Alla ordertypeobjekt.
        Ordertypeobjekt ska bestå utav utcheckade Ordrar som består utav
        CartItem. De behöver kunna sparas på databasen.
*/
