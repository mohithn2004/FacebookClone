import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React from 'react'
import Contact from "./Contact"

const contacts=[
    { src: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg", name: "Jeff Bezoz"},
    { src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    { src: "https://links.papareact.com/zvy", name: "Bill gates"},
    { src: "https://links.papareact.com/snf", name: "Mark Zuckenberg"},
    { src: "https://static.wikia.nocookie.net/aveleyman/images/f/f2/Robert_Downey_Jr._as_Tony_Stark_%28IM2%29.jpg", name: "Tony Stark"}
];

function Widgets() {
  return (
    <div className='hidden lg:?flex flex-col w-60 p-2 mt-5 lg:flex' >
        <div className='flex justify-between'>
            <h2 className='text-xl text-gray-500 '>Contacts</h2>
            <div className='flex space-x-2' > 
            <VideoCameraIcon className='h-6' />
            <SearchIcon className='h-6' />
            <DotsHorizontalIcon />
            </div>
    </div>
    {contacts.map(contact => (
        <Contact key={contact.src}
        src={contact.src}
        name={contact.name} />
    ))}
    
    </div>
  )
}

export default Widgets