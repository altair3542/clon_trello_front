import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await api.post('users/register/', { username, password, email })
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
      <form className='bg-white p-6 rounded shadow-md w-64' onSubmit={handleRegister}>
        <h1 className='text-xl mb-4'>Registro de usuario</h1>
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
        <input
          className='border p-2 w-full mb-4'
          placeholder='Correo electronico'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className='bg-blue-500 text-white p-2 w-full'>Registrarse</button>
      </form>
    </div>

  )
}
