import React, { useContext } from 'react';
import { 
  Box, Typography, Paper, Stack, Button, IconButton 
} from "@mui/material";
// Cambiamos a Grid2 o aseguramos el uso de 'size' para evitar errores de layout
import Grid from '@mui/material/Grid'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

import { CartContext } from '../../view/hooks/CartContext'; 

export const Articles = () => {
  // Extraemos las funciones del contexto
 const { agregarAlCarrito, alternarFavorito, favoritos } = useContext(CartContext);
 

  const products = [
    { id: 1, title: "DIOR", author: "DIOR FOREVER NUDE MATTE FILTER", price: 152000, rating: 5, image: "/img/dior_lip_oil.webp", status: "En stock" },
    { id: 2, title: "CHANEL", author: "LES BEIGES-BLUSH WATER LUMIN", price: 245000, rating: 4, image: "/img/ruborchanel.webp", status: "Pocas unidades" },
    { id: 3, title: "DIOR", author: "DIOR FOREVER GLOW STAR FILTER", price: 170000, rating: 5, image: "/img/polvodior.webp", status: "En stock" },
    { id: 4, title: "DIOR", author: "DIORSHOW 5 COULEURS DEW", price: 397000, rating: 4, image: "/img/paletadior.webp", status: "En stock" },
    { id: 5, title: "CHANEL", author: "LIPSTICK-BOMB ROUGE ALLURE", price: 196500, rating: 5, image: "/img/chanellipstick.webp", status: "En stock" },
    { id: 6, title: "FENTY BEAUTY", author: "GLOSS BOMB UNIVERSAL LIP LUMINIZER", price: 127000, rating: 5, image: "/img/fentybeauty.webp", status: "Pocas unidades" },
    { id: 7, title: "DIOR", author: "DIOR ADDICT LIP GLOW OIL ", price: 239000, rating: 5, image: "/img/dior_lip_oil.webp", status: "En stock" },
    { id: 8, title: "PATRICK TA ", author: "DOUBLE-TA CRÉME & POWDER BLUSH", price: 250000, rating: 4, image: "/img/patrickta.webp", status: "En stock" },
    { id: 9, title: "CHANEL", author: "LES BEIGES BRONZER CREAM", price: 210000, rating: 5, image: "/img/bronzer.webp", status: "Pocas unidades" },
    { id: 10, title: "COCO CHANEL", author: "COCO MADEMOISELLE", price: 550000, rating: 4, image: "/img/cocochanel.webp", status: "En stock" }
  ];

  return (
    <Box sx={{ p: 4, bgcolor: 'white', minHeight: '100vh' }}>
      <Typography component="h1" variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 800, color: '#1a1a1a' }}>
      
      </Typography>

      <Grid container spacing={4}>
        {products.map((item) => {
          const esFavorito = favoritos ? favoritos.some(fav => fav.id === item.id) : false;
          
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Paper 
                component="article" 
                elevation={0} 
                sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  border: '1px solid #f0f0f0', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s', 
                  '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.05)' } 
                }}
              >
                <Box sx={{ position: 'relative', pt: '100%', bgcolor: '#f9f9f9' }}>
                  <Box 
                    component="img" 
                    src={item.image} 
                    alt={`${item.title} - ${item.author}`} 
                    loading="lazy" 
                    sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'contain', p: 2 }} 
                  />
                </Box>

                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 800, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>
                    {item.author}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                    <Button 
                      fullWidth 
                      // CORRECCIÓN: Usamos 'agregarAlCarrito' del contexto
                      onClick={() => agregarAlCarrito(item)} 
                      variant="contained" 
                      startIcon={<ShoppingCartIcon />}
                      // CORRECCIÓN: Se agregaron backticks `` para el template string
                      aria-label={`Añadir ${item.title} al carrito`}
                      sx={{ 
                        bgcolor: '#f0b3e2', 
                        color: '#FFFFFF',
                        borderRadius: 2, 
                        textTransform: 'none', 
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#f396e2' }
                      }}
                    >
                      Añadir
                    </Button>
                    
                    <IconButton 
                      onClick={() => alternarFavorito(item)}
                      aria-label={esFavorito ? `Quitar ${item.author} de favoritos` : `Añadir ${item.author} a favoritos`}
                      sx={{ border: '1px solid #eee', color: esFavorito ? '#f675eb' : '#ccc' }}
                    >
                      {esFavorito ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                    </IconButton>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};