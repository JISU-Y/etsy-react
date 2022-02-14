export interface ProductList {
  discout: number;
  imageUrl: string;
  price: number;
  quickDelivery: boolean;
  viewed: boolean;
  id: number;
}

export interface PopularList {
  contentsUrl: string;
  price: number;
  discount: number;
  freeShipping: boolean;
  title: string;
  reviews: number;
}

export interface TabProductList {
  category: string;
  imageUrl: string;
  price: number;
  discount: boolean;
  quickDelivery: boolean;
}
export interface OurPicks {
  imageUrl: string;
  price: number;
  discount: number;
}

export interface SelectionsList {
  imageUrl: string;
  title: string;
}

export interface CategoryList {
  imageUrl: string;
  title: string;
}
