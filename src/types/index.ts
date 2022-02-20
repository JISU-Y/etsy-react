export interface CardDefaultProps {
  image: string;
  title: string;
}

export interface IconProps {
  width: string | number;
  height: string | number;
  color: string;
}

export interface CartItemProps {
  id: number;
  seller: string;
  image: string;
  name: string;
  options: { color: string; length: string; personalization?: string };
  price: number;
  originalPrice?: number;
  discount: number;
  shipping: number;
  quantity: number;
}
