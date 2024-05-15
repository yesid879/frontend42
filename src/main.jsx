import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// aca se va  a importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
