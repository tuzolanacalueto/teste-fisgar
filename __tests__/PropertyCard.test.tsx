import { render, screen } from '@testing-library/react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/lib/types';

const mockProperty: Property = {
  id: '1',
  title: 'Test Property',
  description: 'Test Description',
  price: 500000,
  location: 'Test Location',
  bedrooms: 3,
  bathrooms: 2,
  area: 1500,
  imageUrl: 'test-image.jpg',
  type: 'house',
  status: 'for-sale'
};

describe('PropertyCard', () => {
  it('renders property information correctly', () => {
    render(<PropertyCard property={mockProperty} />);
    
    expect(screen.getByText('Test Property')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByText('For Sale')).toBeInTheDocument();
    expect(screen.getByText('house')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument(); // bedrooms
    expect(screen.getByText('2')).toBeInTheDocument(); // bathrooms
    expect(screen.getByText('1500 sq ft')).toBeInTheDocument();
  });
});