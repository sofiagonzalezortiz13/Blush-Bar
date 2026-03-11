import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Content = () => {
  const slides = [
    { image: "../../../../../public/img/bannerdior.webp" },
    { image: "../../../../../public/img/fentybeautybanner.webp" },
    { image: "../../../../../public/img/chanelbanner.webp" }
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden", mt: 0 }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "400px", md: "500px" },
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2
        }}
      >
        <IconButton onClick={prevSlide} sx={{ bgcolor: 'rgba(255,255,255,0.4)', '&:hover': { bgcolor: 'white' } }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={nextSlide} sx={{ bgcolor: 'rgba(255,255,255,0.4)', '&:hover': { bgcolor: 'white' } }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Indicadores inferiores */}
      <Box sx={{ position: "absolute", bottom: 15, width: "100%", display: "flex", justifyContent: "center", gap: 1 }}>
        {slides.map((_, i) => (
          <Box key={i} onClick={() => setCurrent(i)} sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: current === i ? "black" : "rgba(0,0,0,0.2)", cursor: "pointer" }} />
        ))}
      </Box>
    </Box>
  );
};