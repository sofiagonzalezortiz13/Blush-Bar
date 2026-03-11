import React, { useRef } from "react"
import {
  Box, Typography, Card, CardMedia, CardContent, IconButton, Stack
} from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ArticlesCarousel = () => {
  const scrollRef = useRef(null);

  const products = [
    { id: 1, title: "DIOR", author: "DIOR ADDICT LIP GLOW OIL", price: 239000, rating: 5, reviews: 17, image: "/img/dior_lip_oil.webp" },
    { id: 2, title: "PATRICK TA ", author: "DOUBLE-TA CRÉME & POWDER BLUSHDUO", price: 145000, rating: 4, reviews: 3, image: "/img/patrickta.webp" },
    { id: 3, title: "COCO CHANEL", author: "COCO MADEMOISELLE", price: 170000, rating: 5, reviews: 10, image: "/img/cocochanel.webp" },
    { id: 4, title: "FENTY BEAUTY", author: "GLOSS BOMB UNIVERSAL LIP LUMINIZER", price: 147000, rating: 4, reviews: 5, image: "/img/fentybeauty.webp" },
    { id: 5, title: "CHANEL", author: "LIPSTICK-BOMB ROUGE ALLURE", price: 196500, rating: 5, reviews: 12, image: "/img/chanellipstick.webp" },
    { id: 6, title: "DIOR", author: "DIOR FOREVER NUDE MATTE FILTER", price: 152000, rating: 5, reviews: 8, image: "/img/polvodior.webp" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ width: '100%', py: 4, bgcolor: 'white', position: 'relative' }}>
      <Box sx={{ bgcolor: '#fce4ec', py: 1, mb: 4, textAlign: 'center' }}>
        <Typography component="h2" variant="h6" sx={{ fontWeight: 600, letterSpacing: 2, fontSize: '0.9rem', color: '#333' }}>
          MÁS VENDIDOS
        </Typography>
      </Box>

      <IconButton 
        onClick={() => scroll('left')}
        aria-label="Ver productos anteriores"
        sx={{ position: 'absolute', left: 10, top: '55%', zIndex: 2, color: '#f4c0e8', bgcolor: 'rgba(255,255,255,0.7)', '&:hover': {bgcolor: 'white'} }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>

      <IconButton 
        onClick={() => scroll('right')}
        aria-label="Ver siguientes productos"
        sx={{ position: 'absolute', right: 10, top: '55%', zIndex: 2, color: '#f4c0e8', bgcolor: 'rgba(255,255,255,0.7)', '&:hover': {bgcolor: 'white'} }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex', gap: 3, overflowX: 'hidden', px: 8, pb: 2, scrollBehavior: 'smooth'
        }}
      >
        {products.map((product) => (
          <Card key={product.id} elevation={0} sx={{ minWidth: 280, maxWidth: 280, border: '1px solid #f0f0f0', borderRadius: '15px', position: 'relative' }}>
            <IconButton aria-label="Añadir a favoritos" sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
              <FavoriteBorderIcon sx={{ color: '#f4c0e8' }} />
            </IconButton>

            <CardMedia
              component="img" height="250" image={product.image} 
              alt={product.author} loading="lazy"
              sx={{ objectFit: 'contain', p: 2 }}
            />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#222' }}>{product.title}</Typography>
              <Typography variant="body2" sx={{ fontSize: '0.75rem', height: '35px', overflow: 'hidden', mb: 1, color: '#666' }}>
                {product.author}
              </Typography>

              <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 16, color: i < product.rating ? '#f4c0e8' : '#e0e0e0' }} />
                ))}
                <Typography variant="caption" sx={{ color: '#999' }}>({product.reviews})</Typography>
              </Stack>

              <Typography variant="body1" sx={{ fontWeight: 700, color: '#000' }}>
                $ {product.price.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};