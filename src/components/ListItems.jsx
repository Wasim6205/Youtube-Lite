import React from 'react'
import { useAuth } from '../context/AuthProvider'

const ListItems = () => {
    const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Music" },
    { id: 3, name: "React routers" },
    { id: 4, name: "Computer programming" },
    { id: 5, name: "Reverberation" },
    { id: 6, name: "Movie musicals" },
    { id: 7, name: "India national cricket team" },
    { id: 8, name: "News" },
    { id: 9, name: "Mixes" },
    { id: 10, name: "1990s" },
    { id: 11, name: "Telugu cinema" },
    { id: 12, name: "Live" },
    { id: 13, name: "Dramedy" },
    { id: 14, name: "Dubbing" },
    { id: 15, name: "Indian soap opera" },
    { id: 16, name: "Cricket" },
    { id: 17, name: "Football" },
    { id: 18, name: "Coding" }
]

  const {value, setValue} = useAuth()

  return (
    <div className='flex overflow-x-scroll hide-scroll-bar px-4 scrollbar-none'>
        <div className='flex space-x-4 flex-nowrap'>
        {categories.map((category) => (
            <div key={category.id} onClick={() => setValue(category.name)} className={`mb-4 flex-none duration-300 rounded-xl px-4 py-2 font-medium cursor-pointer ${category.name == value ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300" }`}>{category.name}</div>
        ))}
        </div>
    </div>
  )
}

export default ListItems