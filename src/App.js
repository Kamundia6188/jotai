

import { atom, useAtom } from 'jotai';
import AddAnime from './components/AddAnime';
import AnimeList from './components/AnimeList';
import { atomWithStorage } from 'jotai/utils'

export const animesatom = atom([
  {
    'title' : 'Title one',
    'year' : '2000',
    'watched' : true
  },
  {
    'title' : 'Title two',
    'year' : '2001',
    'watched' : false
  },
  {
    'title' : 'Title three',
    'year' : '2002',
    'watched' : true
  }
])

const darkModeAtom = atomWithStorage('darkMode', false)

function App() {

  const [anime, setanimes] = useAtom(animesatom);
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  const addanime = () =>{
    setanimes((anime)=>
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
    <div className="App">
      {/* <ul>
        {anime.map((item)=>(
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      {/* set */}
      {/* <button
      onClick={addanime}
      >Add Anime</button> */}
      <AddAnime/>
      <AnimeList/>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
