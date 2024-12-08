import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/token/', { username, password })
      localStorage.setItem('token', response.data.access)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
      <form className='bg-white p-6 rounded shadow-md w-64' onSubmit={handleLogin}>
        <h1 className='text-xl mb-4'>Inicio de sesión</h1>
        <input
          className='border p-2 w-full mb-4'
          placeholder='Nombre de usuario'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className='border p-2 w-full mb-4'
          type="password"
          placeholder='Constraseña'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='bg-blue-500 text-white p-2 w-full'>Iniciar Sesion</button>
      </form>
    </div>
  )
}
