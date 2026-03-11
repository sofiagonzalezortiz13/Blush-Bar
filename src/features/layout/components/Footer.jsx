import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// Importamos tu logo local
import logoBlush from './assets/logo.jpg';

export const Footer = () => {
  // Estilos reutilizables para mantener el código limpio
  const linkStyle = {
    color: '#4a4a4a',
    fontSize: '0.72rem',
    textDecoration: 'none',
    lineHeight: '1.8',
    fontFamily: 'sans-serif',
    '&:hover': { textDecoration: 'underline' }
  };

  const titleStyle = {
    fontSize: '0.85rem',
    fontWeight: 700,
    mb: 1.5,
    color: '#333',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    fontFamily: 'sans-serif',
    letterSpacing: '0.5px'
  };

  return (
    <Box sx={{ bgcolor: 'white', width: '100%', mt: 'auto' }}>
      
      {/* --- LOGO SUPERIOR --- */}
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <img 
          src={logoBlush} 
          alt="Blush-Bar" 
          style={{ 
            width: '180px', 
            height: 'auto', 
            marginBottom: '5px',
            display: 'block',
            margin: '0 auto' 
          }} 
        />
        <Typography variant="caption" display="block" sx={{ color: '#666', fontStyle: 'italic', fontSize: '0.8rem' }}>
          El secreto de la belleza es ser tú misma
        </Typography>
      </Box>

      {/* --- ZONA ROSA (FRANJA DELGADA HORIZONTAL) --- */}
      <Box sx={{ 
        bgcolor: '#fce4ec', 
        pt: 5, pb: 6, 
        px: { md: 12, xs: 3 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        
        {/* BLOQUE 1: LINKS DE INTERÉS */}
        <Box>
          <Typography sx={titleStyle}>LINKS DE INTERÉS</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {['¿Qué es Blush-Bar?', 'Nuestra Historia', 'Nuestras Tiendas', '100% Original', 'Trabaja con Nosotros', 'Preguntas Frecuentes', 'Términos y Condiciones', 'Mi Cuenta'].map(text => (
              <Link key={text} href="#" sx={linkStyle}>{text}</Link>
            ))}
          </Box>
        </Box>

        {/* BLOQUE 2: SERVICIOS (Alineado pero sin título) */}
        <Box sx={{ mt: { xs: 3, md: 4.2 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {['Agenda Tu Clase', 'Tutoriales', 'Puntos Glow', 'Recicla con Blush-Bar', 'Marcas Cruelty Free', 'Recoge en Tienda', 'Maquillaje de Cumpleaños'].map(text => (
              <Link key={text} href="#" sx={linkStyle}>{text}</Link>
            ))}
          </Box>
        </Box>

        {/* BLOQUE 3: PRODUCTOS */}
        <Box sx={{ mt: { xs: 3, md: 0 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {['Productos Nuevos', 'Tamaños Minis', 'Kits y Sets', 'Blog Blush-Bar', 'Blush-Bar Creators', 'Regalos por Compra', 'Bonos de Regalo (Gift Cards)', 'Contáctanos'].map(text => (
              <Link key={text} href="#" sx={linkStyle}>{text}</Link>
            ))}
          </Box>
        </Box>

        {/* BLOQUE 4: SERVICIO AL CLIENTE */}
        <Box sx={{ mt: { xs: 3, md: 0 } }}>
          <Typography sx={titleStyle}>SERVICIO AL CLIENTE</Typography>
          <Typography sx={{ fontSize: '0.72rem', color: '#4a4a4a', mb: 0.5 }}>Horario: Lunes a Viernes</Typography>
          <Typography sx={{ fontSize: '0.72rem', color: '#4a4a4a', mb: 0.5 }}>9:00am a 6:00pm</Typography>
          <Typography sx={{ fontSize: '0.72rem', color: '#4a4a4a' }}>shop@blush-bar.com</Typography>
        </Box>

        {/* BLOQUE 5: SUSCRÍBETE Y REDES */}
        <Box sx={{ maxWidth: '320px', mt: { xs: 4, md: 0 } }}>
          <Typography sx={titleStyle}>SUSCRÍBETE</Typography>
          <Typography sx={{ fontSize: '0.72rem', color: '#4a4a4a', mb: 2, lineHeight: 1.4 }}>
            Registra tu email para unirte a la comunidad Blush-Bar y enterarte de promociones, lanzamientos y más!
          </Typography>

          {/* Formulario de suscripción manual para look exacto */}
          <Box sx={{ display: 'flex', mb: 1.5, height: '38px', border: '1px solid #ccc', bgcolor: 'white' }}>
            <input 
              placeholder="Ingresa tu dirección de email" 
              style={{ 
                flexGrow: 1, 
                border: 'none', 
                padding: '0 12px', 
                fontSize: '0.75rem',
                outline: 'none',
                width: '100%'
              }} 
            />
            <button style={{ 
              backgroundColor: '#4d4d4d', 
              color: 'white', 
              border: 'none', 
              padding: '0 20px', 
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.8rem'
            }}>OK</button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
            <input type="checkbox" style={{ marginTop: '3px', marginRight: '8px' }} />
            <Typography sx={{ fontSize: '0.65rem', color: '#4a4a4a', lineHeight: 1.3 }}>
              He leído y acepto las <Link href="#" sx={{ color: '#0000FF', textDecoration: 'underline' }}>Políticas de Tratamiento de Datos</Link>
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', mb: 1.5, color: '#333' }}>
            SÍGUENOS EN
          </Typography>
          
          {/* Iconos de Redes con el círculo negro */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton size="small" sx={{ border: '1.5px solid black', p: 0.5, color: 'black' }}>
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" sx={{ border: '1.5px solid black', p: 0.5, color: 'black' }}>
               <Typography sx={{ fontWeight: '900', fontSize: '14px', fontFamily: 'sans-serif' }}>J</Typography>
            </IconButton>
            <IconButton size="small" sx={{ border: '1.5px solid black', p: 0.5, color: 'black' }}>
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};