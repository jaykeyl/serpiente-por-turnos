import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SerpientePorPartes from './SerpientePorPartes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SerpientePorPartes/>
  </StrictMode>,
)
