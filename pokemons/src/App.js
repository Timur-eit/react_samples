import React, { useState } from 'react';
import { Pokemon } from './Pokemon';

const pokemons = [
  {
    name: "pikachu",
    id: "25"
  },
  {
    name: "bulbasaur",
    id: "1"
  },
  {
    name: "ivysaur",
    id: "2"
  },
  {
    name: "venusaur",
    id: "3"
  },
  {
    name: "charmander",
    id: "4"
  },
  {
    name: "charmeleon",
    id: "5"
  },
  {
    name: "charizard",
    id: "6"
  },
  {
    name: "squirtle",
    id: "7"
  },
  {
    name: "wartortle",
    id: "8"
  },
  {
    name: "blastoise",
    id: "9"
  },
  {
    name: "caterpie",
    id: "10"
  },
  {
    name: "metapod",
    id: "11"
  },
  {
    name: "butterfree",
    id: "12"
  },
  {
    name: "weedle",
    id: "13"
  },
  {
    name: "kakuna",
    id: "14"
  },
  {
    name: "beedrill",
    id: "15"
  },
  {
    name: "pidgey",
    id: "16"
  },
  {
    name: "pidgeotto",
    id: "17"
  },
  {
    name: "pidgeot",
    id: "18"
  },
  {
    name: "rattata",
    id: "19"
  },
];

export function App() {
 const [caughtIds, setCaugthIds] = useState([]);
 
 function toggleCaugth(id) {
   setCaugthIds(ids => {
     if (ids.includes(id)) {
       return ids.filter(elem => elem !== id);
     }
     return [...ids, id];
   });
 }
  
 return (
   <React.Fragment>
     <h1 className='pokemons-quantity'>Покемонов поймано {caughtIds.length}</h1>
     <div className='pokemons'>
       {pokemons.map(p => (
         <Pokemon
          key={p.id}
          id={p.id}
          name={p.name}
          caught={caughtIds.includes(p.id)}
          onToggleCaught={toggleCaugth}
        />
       ))}
     </div>
   </React.Fragment>
 );  
}
