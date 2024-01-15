export type ProductType = {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  categoryId: 1;
  image: string;
};

export type CategoryType = {
  id: number;
  name: string;
  description: string;
};
