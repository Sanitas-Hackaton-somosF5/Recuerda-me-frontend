import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routerRecuerda from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerRecuerda} />
  </StrictMode>,
)
