'use client';

import { Grid } from '@mui/material';
import PropertyCard from './PropertyCard';
import { Property } from '@/lib/types';

interface PropertyListProps {
  properties: Property[];
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid item key={property.id} xs={12} sm={6} md={6} lg={4}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}