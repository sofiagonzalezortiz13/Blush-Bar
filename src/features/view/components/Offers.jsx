import React from 'react'
import { Box, Toolbar, Typography, Container, Divider } from '@mui/material'
import {UseStateColor} from '../hooks/useState'
import { Ejercicio2 } from '../hooks/useContext.jsx';
import { UseRefComponent } from "../hooks/useRef.jsx";
import { RelojEfecto } from '../hooks/useEffects.jsx';
import {StatusBar} from '../hooks/useOnlinestatus'  
import { UseReducerHook } from '../hooks/useReducer.jsx';
import {UseCallbackFilter} from '../hooks/useCallback.jsx';
import { UseToggle } from '../hooks/useCustom.jsx';
export const Offers = () => {
  return(
  <Container maxWidth="md">
      {/* 1. ESPACIADO PARA EL NAVBAR FIJO */}
      <Toolbar /> 
      <Box sx={{ mt: 5, mb: 5 }}>
<UseStateColor></UseStateColor> 
<Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useRef</Typography>
          <UseRefComponent />
          <Divider sx={{ my: 4 }} />
        
<StatusBar></StatusBar>
<Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useContext</Typography> 
          <Ejercicio2></Ejercicio2>
          
<Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useEffect</Typography>    
          <RelojEfecto/>

  <Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useReducer</Typography>
          <UseReducerHook/>

  <Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useCallback</Typography>
          <UseCallbackFilter/>
          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" color="secondary">Ejercicio: useToggle</Typography>
          <UseToggle/>
    </Box>
    </Container>

  ) 
}