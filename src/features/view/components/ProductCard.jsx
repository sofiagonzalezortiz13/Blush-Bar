import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Box, Chip } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ProductCard = ({ product }) => {
  return (
    <Card elevation={0} sx={{ border: '1px solid #eee', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <Chip 
          label={product.status || "En stock"} 
          size="small"
          color={product.status === "Pocas unidades" ? "error" : "success"}
          sx={{ position: 'absolute', top: 10, right: 10, fontSize: '0.6rem', height: '20px' }} 
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 0 }}>
        <Typography variant="caption" sx={{ color: '#999', fontWeight: 700 }}>{product.brand}</Typography>
        <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 1, height: '40px', overflow: 'hidden' }}>{product.name}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>$ {product.price.toLocaleString()}</Typography>
      </CardContent>

      <CardActions sx={{ p: 1, borderTop: '1px solid #eee' }}>
        <Button fullWidth variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{ fontSize: '0.6rem', borderColor: '#eee', color: '#444' }}>
          COMPRAR
        </Button>
        <Button fullWidth variant="outlined" startIcon={<FavoriteBorderIcon />} sx={{ fontSize: '0.6rem', borderColor: '#eee', color: '#444' }}>
          FAVORITOS
        </Button>
      </CardActions>
    </Card>
  );
};