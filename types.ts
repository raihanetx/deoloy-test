
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  summary: string;
}

export interface CartItem extends Product {
  quantity: number;
}
