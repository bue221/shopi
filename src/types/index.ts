export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
};

export type TCategory = {
  id: number;
  name: string;
  image: string;
};
