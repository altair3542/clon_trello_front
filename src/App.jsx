import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<div>Inicio de sesión</div>} />
      <Route path="/register" element={<div>Registro</div>} />
      <Route path="/" element={<div>Inicio</div>} />
      <Route path="/board/:boardId" element={<div>Detalles del Tablero</div>} />
    </Routes>
  )
}


