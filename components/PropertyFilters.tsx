'use client';

import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PropertyFilters as FilterType } from '@/lib/types';

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterType) => void;
}

export default function PropertyFilters({ onFilterChange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState<FilterType>({});

  const handleChange = (field: keyof FilterType, value: string | number | undefined) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Property Type</InputLabel>
          <Select
            value={filters.type || ''}
            label="Property Type"
            onChange={(e: SelectChangeEvent) => handleChange('type', e.target.value || undefined)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="house">House</MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status || ''}
            label="Status"
            onChange={(e: SelectChangeEvent) => handleChange('status', e.target.value || undefined)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="for-sale">For Sale</MenuItem>
            <MenuItem value="for-rent">For Rent</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Min Price"
          type="number"
          value={filters.minPrice || ''}
          onChange={(e) => handleChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
          fullWidth
        />

        <TextField
          label="Max Price"
          type="number"
          value={filters.maxPrice || ''}
          onChange={(e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
          fullWidth
        />

        <TextField
          label="Min Bedrooms"
          type="number"
          value={filters.minBedrooms || ''}
          onChange={(e) => handleChange('minBedrooms', e.target.value ? Number(e.target.value) : undefined)}
          fullWidth
        />
      </Box>
    </Paper>
  );
}