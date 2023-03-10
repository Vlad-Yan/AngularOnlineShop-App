export interface IProducts {
  id: number,
  title: string,
  price: number,
  image: string,
  characterizations: IProductsCharacterizations,
  quantity: number;
}

export interface IProductsCharacterizations {
  brand: string,
  gender: string,
  height: string,
  style: string,
  material: string;
}