import { render, screen, fireEvent } from '@testing-library/react';
import PropertyFilters from '@/components/PropertyFilters';

describe('PropertyFilters', () => {
  it('calls onFilterChange when filters are updated', () => {
    const mockOnFilterChange = jest.fn();
    render(<PropertyFilters onFilterChange={mockOnFilterChange} />);

    // Test type filter
    const typeSelect = screen.getByLabelText('Property Type');
    fireEvent.mouseDown(typeSelect);
    const houseOption = screen.getByText('House');
    fireEvent.click(houseOption);

    expect(mockOnFilterChange).toHaveBeenCalledWith(expect.objectContaining({
      type: 'house'
    }));

    // Test price filter
    const minPriceInput = screen.getByLabelText('Min Price');
    fireEvent.change(minPriceInput, { target: { value: '100000' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith(expect.objectContaining({
      minPrice: 100000
    }));
  });
});