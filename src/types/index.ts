export interface CardDefaultProps {
  image: string;
  title: string;
}

export interface productListProps {
  discout: number;
  imageUrl: string;
  price: number;
  quickDelivery: boolean;
  viewed: boolean;
  id: number;
}

export interface tabProductListProps {
  category: string;
  imageUrl: string;
  price: number;
  discount: boolean;
  quickDelivery: boolean;
}

export interface popularListProps {
  contentsUrl: string;
  price: number;
  discount: number;
  freeShipping: boolean;
  title: string;
  reviews: number;
}

export interface IconProps {
  width: string | number;
  height: string | number;
  color: string;
}
