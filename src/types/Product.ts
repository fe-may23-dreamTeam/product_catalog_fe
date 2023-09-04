import { ICategory } from './Category';
import { IDescription } from './Description';

export interface IProduct {
  _id: string;
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable?: string[];
  capacity?: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
  description: IDescription[];
  category: ICategory;
}
