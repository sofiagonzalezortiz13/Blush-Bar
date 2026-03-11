import React, { useContext } from 'react';
import { Box, Container, Typography, Paper, Stack, IconButton, Button } from '@mui/material';
// Se recomienda usar Grid2 o asegurar la importación correcta para evitar advertencias de MUI
import Grid from '@mui/material/Grid'; 

// Iconos
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// IMPORTACIÓN DEL CONTEXTO
import { CartContext } from '../../view/hooks/CartContext'; 

export const Myfavourites = () => {
  // Consumimos los favoritos y las acciones del contexto
  // Añadimos un valor por defecto [] para evitar errores si el context tarda en cargar
  const { favoritos = [], alternarFavorito, agregarAlCarrito } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, minHeight: '80vh', backgroundColor: '#fafafa' }}>
      <Container>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 900, mb: 5, display: 'flex', alignItems: 'center', gap: 2, color: '#1a1a1a' }}
        >
          <FavoriteIcon sx={{ color: '#f7b6e5' }} /> 
          
        </Typography>

        {favoritos.length === 0 ? (
          <Paper 
            elevation={0} 
            sx={{ p: 8, textAlign: 'center', borderRadius: 4, bgcolor: '#f5f5f5', border: '1px dashed #ccc' }}
          >
            <Typography variant="h6" color="text.secondary">
              Tu lista de deseos está vacía. <br />
              ¡Explora la colección para añadir productos!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {favoritos.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 4, 
                    overflow: 'hidden', 
                    border: '1px solid #eee',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' } 
                  }}
                >
                  {/* IMAGEN DEL PRODUCTO */}
                  <Box sx={{ position: 'relative', pt: '100%', bgcolor: 'white' }}>
                    <Box 
                      component="img" 
                      src={item.image} 
                      alt={`${item.title} - ${item.author}`} 
                      sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'contain', p: 2 }} 
                    />
                    
                    {/* BOTÓN PARA QUITAR DE FAVORITOS */}
                    <IconButton 
                      onClick={() => alternarFavorito(item)}
                      // CORRECCIÓN: Se agregaron backticks para que el template string funcione
                      aria-label={`Quitar ${item.author} de favoritos`}
                      sx={{ 
                        position: 'absolute', top: 10, right: 10, 
                        bgcolor: 'rgba(255,255,255,0.8)', 
                        '&:hover': { bgcolor: '#efc3e7', color: 'white' },
                        color: '#eebbd6'
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Box>

                  <Box sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: '#757575', textTransform: 'uppercase' }}>
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1rem', mb: 1, height: '40px', overflow: 'hidden' }}
                    >
                      {item.author}
                    </Typography>
                    
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#2b2929', mb: 2, mt: 'auto' }}>
                      ${item.price.toLocaleString()}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                      <Button 
                        variant="contained" 
                        fullWidth 
                        onClick={() => agregarAlCarrito(item)}
                        startIcon={<ShoppingCartIcon />}
                        // CORRECCIÓN: Se agregaron backticks
                        aria-label={`Comprar ${item.author}`}
                        sx={{ 
                          bgcolor: '#f0a9df', 
                          borderRadius: '8px', 
                          textTransform: 'none', 
                          fontWeight: 'bold',
                          '&:hover': { bgcolor: '#ebb9d1' }
                        }}
                      >
                        Comprar
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Myfavourites;