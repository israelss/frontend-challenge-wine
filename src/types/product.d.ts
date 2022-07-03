export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size?: string;
  volume?: string;
  Rating?: number;
  rating: number;
  avaliations?: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export type ProductsApiReturn = {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: Array<Product>;
}
