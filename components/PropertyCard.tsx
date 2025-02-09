'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { BedDouble, Bath, Square, Home } from 'lucide-react';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card elevation={2}>
      <CardMedia
        component="img"
        height="200"
        image={property.imageUrl}
        alt={property.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {property.title}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            label={property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
            color="primary"
            size="small"
          />
          <Chip
            label={property.type}
            color="secondary"
            size="small"
          />
        </Stack>

        <Typography variant="h5" color="primary" gutterBottom>
          {formatPrice(property.price)}
          {property.status === 'for-rent' && '/month'}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {property.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
          {property.type !== 'commercial' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <BedDouble size={20} />
                <Typography variant="body2">{property.bedrooms}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Bath size={20} />
                <Typography variant="body2">{property.bathrooms}</Typography>
              </Box>
            </>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Square size={20} />
            <Typography variant="body2">{property.area} sq ft</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Home size={20} />
            <Typography variant="body2">{property.location}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}