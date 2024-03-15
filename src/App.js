import logo from './logo.svg';
import './App.css';
import { useAtom } from 'jotai';
import { citiesAtom } from './Atoms';


function App() {
  // const cities = useAtom(citiesAtom);
  const [cities, setCities] = useAtom(citiesAtom);
  console.log(cities);
  return (
    <div className='p-6 flex flex-col'>
      {cities.map((city) => (
      <h1 key={city.city} className="text-xs font-bold font-mono tracking-wider uppercase text-gray-600">
        {city.city} : {city.population}
      </h1>
      ))}
      
    </div>
  );
}

export default App;
