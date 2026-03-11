
import * as React from 'react'
import { useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './assets/logo.jpg' 
import {AppBar, Toolbar, Typography, Box, IconButton, Badge, InputBase, Stack} from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { CartContext } from '../../view/hooks/CartContext'

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: 'white',
  border: '1px solid #333',
  display: 'flex',
  alignItems: 'center',
  padding: '0px 15px',
  width: '100%',
  maxWidth: '500px',
  height: '35px'
}))

export const Header = () => {
  const { carrito } = useContext(CartContext)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim() === "") return
    navigate(`/articulos?search=${search}`)
    setSearch("")
  }

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ width: '100%' }}>
      
      {/* BARRA SUPERIOR */}
      <Box sx={{ bgcolor: '#fce4ec', py: 0.8, textAlign: 'center', borderBottom: '1px solid #f8bbd0' }}>
        <Typography sx={{ fontWeight: 500, fontSize: '0.75rem', letterSpacing: 0.5, color: '#333' }}>
          Envío gratis por compras superiores a $150.000 COP
        </Typography>
      </Box>

      <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: { xs: 2, md: 6 }, bgcolor: 'white' }}>
        
        <NavLink to="/" aria-label="Ir al inicio">
          <Box 
            component="img" 
            src={logo} 
            alt="Logo Blush-Bar" 
            sx={{ height: { xs: 35, md: 50 }, width: 'auto' }} 
          />
        </NavLink>

        {/* Buscador */}
        <Box component="form" onSubmit={handleSearch} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mx: 4 }}>
          <SearchBar>
            <InputBase 
              placeholder="Buscar productos..." 
              inputProps={{ 'aria-label': 'campo de búsqueda' }}
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              fullWidth 
              sx={{ fontSize: '0.85rem' }} 
            />
            <IconButton type="submit" aria-label="Ejecutar búsqueda" sx={{ p: 0 }}>
              <SearchIcon sx={{ color: '#333', fontSize: 20 }} />
            </IconButton>
          </SearchBar>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton component={NavLink} to="/micuenta" sx={{ color: '#333' }} aria-label="Mi cuenta">
            <PersonOutlineIcon />
            <Typography sx={{ fontSize: '0.7rem', ml: 0.5, display: { xs: 'none', md: 'block' }, fontWeight: 600 }}>Mi Cuenta</Typography>
          </IconButton>
          
          <IconButton component={NavLink} to="/favoritos" sx={{ color: '#333' }} aria-label="Mis favoritos">
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton component={NavLink} to="/mybuys" sx={{ color: '#333' }} aria-label="Carrito de compras">
            <Badge badgeContent={carrito.length} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>

      {/* Menú de Navegación */}
      <Box component="nav" sx={{ 
        bgcolor: '#fce4ec', display: 'flex', justifyContent: 'center', 
        gap: { xs: 3, md: 8 }, py: 1.2, borderTop: '1px solid #f8bbd0'
      }}>
        {['INICIO', 'ARTICULOS', 'OFERTAS', 'FAVORITOS'].map((item) => (
          <Typography
            key={item}
            component={NavLink}
            to={item === 'INICIO' ? '/' : `/${item.toLowerCase()}`}
            sx={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: 1.2,
              '&.active': { borderBottom: '2px solid #333', pb: 0.2 },
              '&:hover': { color: '#d81b60' }
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </AppBar>
  )
}