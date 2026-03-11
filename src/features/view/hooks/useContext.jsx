import React, { useState, createContext, useContext } from 'react';
import { Box, Button, Toolbar } from '@mui/material';

const TemaContext = createContext();

export const Ejercicio2 = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <TemaContext.Provider value={{ color, setColor }}>
      <ContenidoPantalla />
    </TemaContext.Provider>
  );
};

const ContenidoPantalla = () => {
  const { color, setColor } = useContext(TemaContext); // Sacamos el dato de la nube.
  return (
    <Box sx={{ bgcolor: color, height: '100vh', p: 3 }}>
      <Toolbar />
      <Button onClick={() => setColor(color === "#ffffff" ? "#ddd" : "pink")}>
        Cambiar Fondo
      </Button>
    </Box>
  );
};