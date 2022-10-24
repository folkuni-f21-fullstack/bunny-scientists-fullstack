export type Order = {
    orderNumber: number,
    orderItems: OrderItem[]
    customerComment: string,
    customer: string,
    phoneNumber: number
}

export type OrderItem = {
    menuItem: MenuItem,
    amount: number
}

export type MenuItem = {
    id: string,
    name: string,
    price: number
}

export type Archive = {
    order: Order,
    commentToChef: string
}

export type Credentials = {
    username: string
    password: string
}

export type Menu = {
    id: string,
    name: string,
    menuItems: MenuItems[]
}

export type MenuItems = {
    id: string,
    name: string,
    price: number,
    description: string,
    image: string
}

export type Schema = {
    orders: Order[]
    archive: Archive[]
    credentials: Credentials
    menu: Menu[]
    //här läggs alla typer som databasen kommer använda
}
