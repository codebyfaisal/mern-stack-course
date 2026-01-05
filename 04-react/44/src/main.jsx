import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { My1, My2 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <My1 />
    <br />
    <My2 />
    <br /> */}
    <App />
  </StrictMode>,
)
