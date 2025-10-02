import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairLoader from './components/comman/StairLoader.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StairLoader>
        <NavContext>
        <App/>
        </NavContext>
      </StairLoader>
    </BrowserRouter>
  </StrictMode>,
)
