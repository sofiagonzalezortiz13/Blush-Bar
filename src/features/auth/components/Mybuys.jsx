import React, { useContext } from 'react';
// IMPORTANTE: Verifica que esta ruta sea la correcta en tu estructura de carpetas
import { CartContext } from '../../view/hooks/CartContext'; 
import { Box, Typography, Paper, Container, Divider, Stack } from '@mui/material';
import Grid from '@mui/material/Grid'; // Usando Grid2 para mejor compatibilidad
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Mybuys = () => {
  // Extraemos el carrito del contexto (añadimos [] por seguridad)
  const { carrito = [] } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, minHeight: '80vh', backgroundColor: '#fafafa' }}>
      <Container maxWidth="md">
        <Typography
          component="h1" // H1 semántico para SEO
          variant="h4" 
          sx={{
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: '#1a1a1a',
            mb: 2,
          }}
        >
          <ShoppingCartIcon sx={{ color: '#f7abe6', fontSize: 40 }} />
          
        </Typography>

        <Divider 
          sx={{ 
            mb: carrito.length ? 4 : 2, 
            bgcolor: '#ecb4e4', 
            height: 4, 
            borderRadius: 2, 
            width: 120,
            border: 'none' 
          }} 
        />

        {carrito.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              borderRadius: 4,
              bgcolor: '#fff',
              border: '1px solid #eee',
              mt: 5
            }}
          >
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontWeight: 700 }}>
              Tu bolsa de compras está vacía.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¡Explora las colecciones de Dior, Chanel y Fenty para empezar tu selección!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {carrito.map((item, idx) => (
              // CORRECCIÓN: Se agregaron backticks `` para el template string
              <Grid size={12} key={item.instanceId ?? `${item.id}-${idx}`}>
                <Paper
                  component="article"
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid #eee',
                    transition: '0.3s',
                    '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.05)' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3 },
                    p: 2,
                    bgcolor: '#fff'
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.title} - ${item.author}`}
                    sx={{
                      width: { xs: 70, sm: 90 },
                      height: { xs: 70, sm: 90 },
                      objectFit: 'contain',
                      borderRadius: 2,
                      border: '1px solid #f0f0f0',
                      p: 1,
                      background: '#fff'
                    }}
                  />
                  
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: '#757575',
                        textTransform: 'uppercase',
                        letterSpacing: 1
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h2" // H2 para jerarquía de producto
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.9rem', sm: '1.1rem' },
                        color: '#1a1a1a',
                        lineHeight: 1.2,
                        mb: 0.5
                      }}
                    >
                      {item.author}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 900,
                        color: '#ebb8db',
                        fontSize: '1.1rem',
                      }}
                    >
                      ${item.price?.toLocaleString()}
                    </Typography>
                  </Box>

                  <Box sx={{ pr: 2, display: { xs: 'none', md: 'block' } }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        bgcolor: '#e8f5e9', 
                        color: '#e98cb9', 
                        px: 1.5, 
                        py: 0.5, 
                        borderRadius: 10, 
                        fontWeight: 700,
                        border: '1px solid #c8e6c9'
                      }}
                    >
                      Listo para envío
                    </Typography>
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