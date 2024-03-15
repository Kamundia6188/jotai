import { useAtom, useAtomValue } from 'jotai';
import React from 'react'
import { animesatom } from '../App';

function AnimeList() {
   
    // const anime = useAtomValue(animes);
    // console.log(anime);
    const [anime, setAnime] = useAtom(animesatom);
  return (
   <>
    <ul>
        {anime.map((item) => (
            <li key={item.title}>{item.title} {item.watched ? 'Watched' : 'Not Watched'}</li>
        ))}
    </ul>
   </>
  )
}

export default AnimeList