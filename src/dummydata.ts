import IMenuItem from "@/lib/interfaces/MenuItem";
// This file contains dummy data for the menu items.
const menuItems: IMenuItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and our special sauce.",
    category: "Burgers",
    price: 9.99,
    imageurl: "https://example.com/images/classic-burger.jpg",
    available: true,
    quantity: 10,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil on a crispy crust.",
    category: "Pizzas",
    price: 12.5,
    imageurl: "https://example.com/images/margherita-pizza.jpg",
    available: true,
    quantity: 5,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine, Parmesan, croutons, and Caesar dressing.",
    category: "Salads",
    price: 7.25,
    imageurl: "https://example.com/images/caesar-salad.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Traditional Italian pasta with rich meat sauce.",
    category: "Pasta",
    price: 13.75,
    imageurl: "https://example.com/images/spaghetti-bolognese.jpg",
    available: false,
    quantity: 0,
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    category: "Desserts",
    price: 6.5,
    imageurl: "https://example.com/images/chocolate-lava-cake.jpg",
    available: true,
    quantity: 8,
  },
];

export default menuItems;
