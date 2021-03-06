export interface ItemReviews {
  userName: string;
  color: string;
  length: number;
  review: string;
}
export interface Details {
  id: number;
  images: string[];
  title: string;
  sold: number;
  provider: string;
  etsyPick: boolean;
  price: number;
  discount: number;
  finishOptions: string[];
  lengthOptions: number[];
  personalization: string;
  details: string[];
  quickDelivery: boolean;
  itemReviews: ItemReviews[];
}
