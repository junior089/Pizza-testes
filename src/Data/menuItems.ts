import { PizzaItem } from '../Types/types';

export const menuItems: PizzaItem[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: 45.90,
    image: "src/images/margerita.png",
    category: "Clássicas"
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Molho de tomate, mussarela, pepperoni",
    price: 49.90,
    image: "src/images/pepperoni.jpg",
    category: "Clássicas"
  },
  {
    id: 3,
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovos, cebola",
    price: 52.90,
    image: "src/images/portuguesa.jpg",
    category: "Especiais"
  },
  {
    id: 4,
    name: "Moda Da Casa",
    description: "Molho de tomate, mussarela, presunto, ovos, cebola, bacon, azeitonas",
    price: 54.90,
    image: "src/images/modadacasa.jpg",
    category: "Especiais"
  },
  {
    id: 4,
    name: "Quatro Queijos",
    description: "Mussarela, gorgonzola, parmesão e provolone",
    price: 54.90,
    image: "src/images/quatroqueijos.jpg",
    category: "Especiais"
  }
];