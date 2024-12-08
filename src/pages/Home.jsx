import { useEffect, useState } from 'react'
import { getBoards, createBoard } from '../api/boards'

export default function Home() {
  const [boards, setBoards] = useState([])
  const [boardName, setBoardName] = useState('')

  useEffect(() =>{
    fechtBoards()
  }, [])

  const fechtBoards = async () => {
    const data = await getBoards()
    setBoards(data)
  }

  const handleCreateBoard = async (e) => {
    e.preventDefauilt()
    const newBoard = await createBoard(boardName)
    setBoards([...boards, newBoard])
    setBoardName('')
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Mis tableros</h1>
      <form onSubmit={handleCreateBoard} className="mb-4 flex items-center space-x-2">
        <input
          className='border p-2'
          placeholder='Nombre del tablero'
          value={boardName}
          onChange={e => setBoardName(e.target.value)}
        />
        <button className='bg-blue-500 text-white p-2'>Crear</button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {boards.map(b => (
          <a key={b.id} href={`/board/${b.id}`} className="bg-white p-4 shadow rounded">
            {b.name}
          </a>
        ))}
      </div>
    </div>
  )

}
