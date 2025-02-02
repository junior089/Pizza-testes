export interface PizzaItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export type Page = 'home' | 'menu' | 'about' | 'cart';
  
  export interface CartItem {
    item: PizzaItem;
    quantity: number;
  }
  
  export interface AppContextType {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    cartItems: CartItem[];
    addToCart: (pizza: PizzaItem) => void;
    removeFromCart: (pizzaId: number) => void;
  }