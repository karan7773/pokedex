import './App.css';
import React,{useState,useEffect} from 'react';
import PokemonCard from './components/PokemonCard';

function App() {

  const [allPokemons , setAllPokemon]=useState([])
  const [loadmore , setLoadMore]=useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons=async()=>{
    const res = await fetch(loadmore)
    const data =await res.json()

    setLoadMore(data.next)
    // console.log(data)

    function createPokemonObject(results){
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemon(currentList=>[...currentList,data])
      });
      // console.log(allPokemons)
    }
    createPokemonObject(data.results)
    // await console.log(allPokemons)
  }

  useEffect(()=>{
    getAllPokemons()
  },[])

  return (
    <div className="app-container">
      <h1>Pokédex</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map((pokemon,index)=>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
          
              type={pokemon.types[0].type.name}
              key={index}
            />
          )}
        </div>
        <button className='load-more' onClick={getAllPokemons} >load more</button>
      </div>
    </div>
  );
}

export default App;
