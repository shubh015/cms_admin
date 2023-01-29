import {faHouse, faPhone, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const navContent = {
	sidenav: [
		{
			id: 0,
			icon: faHouse,
			title: "Dashboard",
			path: "/",
		},
		{
			id: 2,
			icon: faShoppingCart,
			title: "E-Commerce",
			subMenu: [
				{id: 1, title: "Products", path: "/products"},
				// {id: 2, title: "Product Details", path: "/product-details"},
				// {id: 3, title: "New Products", path: "/product-new"},
				{id: 4, title: "Orders", path: "/orders"},
				// {id: 5, title: "Order Details", path: "/order-details"},
			],
		},
		{
			id: 1,
			icon: faPhone,
			title: "Contact",
			subMenu: [
				{id: 1, title: "Chats", path: ""},
				{id: 2, title: "Customer Helpline", path: ""},
			],
		},
	],
};
