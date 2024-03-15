import { useSetAtom } from 'jotai'
import React from 'react'
import { animesatom } from '../App';

function AddAnime() {
    const setanime = useSetAtom(animesatom);
    const addanime = () =>{
        setanime((anime)=>
        [
          ...anime,
          {
            'title' : 'Title Four',
            'year' : '2003',
            'watched' : true
          }
        ])
      }
  return (
    <div>
      <button
      onClick={addanime}
      >Add Anime</button>
    </div>
  )
}

export default AddAnime