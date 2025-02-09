import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Luxurious apartment in the heart of downtown with stunning city views.',
    price: 500000,
    location: 'Downtown',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    type: 'apartment',
    status: 'for-sale'
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    description: 'Spacious family home with a large backyard in a quiet neighborhood.',
    price: 750000,
    location: 'Suburbs',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    type: 'house',
    status: 'for-sale'
  },
  {
    id: '3',
    title: 'Commercial Office Space',
    description: 'Prime location office space perfect for small to medium businesses.',
    price: 2000,
    location: 'Business District',
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    type: 'commercial',
    status: 'for-rent'
  }
];