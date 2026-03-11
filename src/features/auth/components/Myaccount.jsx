import React, { useState } from 'react';
import { 
  Box, Paper, Typography, TextField, Button, 
  InputAdornment, IconButton, Checkbox, FormControlLabel 
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

export const Myaccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  // 1. Lógica de validación
  const validate = () => {
    let tempErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      tempErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Correo inválido (ejemplo@gmail.com)";
    }

    if (!formData.password) {
      tempErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Mínimo 6 caracteres";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Datos válidos, enviando...", formData);
      // Aquí iría tu lógica de Firebase o API
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, bgcolor: '#fafafa', minHeight: '80vh' }}>
      <Paper elevation={0} sx={{ p: 4, width: '100%', maxWidth: 400, borderRadius: 4, border: '1px solid #eee' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, textAlign: 'center' }}>
          BIENVENIDO
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          {/* Campo de Correo */}
          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={!!errors.email}
            helperText={errors.email}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color={errors.email ? "error" : "action"} />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Campo de Contraseña */}
          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            error={!!errors.password}
            helperText={errors.password}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color={errors.password ? "error" : "action"} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} aria-label="Cambiar visibilidad">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography variant="body2">Recordarme</Typography>}
            sx={{ mt: 1 }}
          />

          <Button 
            fullWidth 
            type="submit" 
            variant="contained" 
            sx={{ 
              mt: 3, py: 1.5, borderRadius: 2, fontWeight: 700,
              bgcolor: '#f87fd0', '&:hover': { bgcolor: '#f065c9' }
            }}
          >
            INICIAR SESIÓN
          </Button>
        </form>
      </Paper>
    </Box>
  );
};