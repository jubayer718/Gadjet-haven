import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routs'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      
          <RouterProvider router={routes}></RouterProvider>
   
     <Toaster />
 </HelmetProvider>
   
  
  </StrictMode>,
)