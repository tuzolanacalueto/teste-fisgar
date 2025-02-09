'use client';

import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PropertyList from '@/components/PropertyList';
import PropertyFilters from '@/components/PropertyFilters';
import { mockProperties } from '@/lib/mockData';
import { Property, PropertyFilters as FilterType } from '@/lib/types';

export default function Home() {
  const [filters, setFilters] = useState<FilterType>({});
  const [properties, setProperties] = useState<Property[]>(mockProperties);

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters);
    
    const filteredProperties = mockProperties.filter(property => {
      if (newFilters.type && property.type !== newFilters.type) return false;
      if (newFilters.status && property.status !== newFilters.status) return false;
      if (newFilters.minPrice && property.price < newFilters.minPrice) return false;
      if (newFilters.maxPrice && property.price > newFilters.maxPrice) return false;
      if (newFilters.minBedrooms && property.bedrooms < newFilters.minBedrooms) return false;
      return true;
    });

    setProperties(filteredProperties);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Real Estate Listings
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <PropertyFilters onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <PropertyList properties={properties} />
        </Grid>
      </Grid>
    </Container>
  );
}