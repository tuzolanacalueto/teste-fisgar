export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: 'house' | 'apartment' | 'commercial';
  status: 'for-sale' | 'for-rent';
}

export interface PropertyFilters {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
}