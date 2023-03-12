// import PokemonSearch from '@/components/SearchBox'
import styles from '@/styles/Home.module.css'

import Image from 'next/image'

import Card from '../components/Card'

import {useRouter} from 'next/router'


export async function getStaticProps( ){

  // const maxPokemons = 10

  // const api = 'https://pokeapi.co/api/v2/pokemon/'

  // const res = await fetch(`${api}/?limit=${maxPokemons}`)

  // const data = await res.json()

  // //add pokemon index


  // data.results.forEach((item,index)=> {
  //   item.id = index + 1

  // })

  // console.log(data.results)

  return {
    props: {
      pokemons: [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    id: 1
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    id: 2
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    id: 3
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    id: 4
  },
  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    id: 5
  },
  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
    id: 6
  },
  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
    id: 7
  },
  {
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
    id: 8
  },
  {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
    id: 9
  },
  {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
    id: 10
  }
],
    }
  }

}

export default function Home({pokemons}) {
  const router = useRouter();
  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }
  return (
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span className={styles.title_span}>Next</span></h1>
        <Image src="/images/pokeball.png" width= "50" height = "50" alt = "PokeNext"/>
      </div>,
      <div className={styles.pokemon_container}>
        {pokemons && pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
   ) 

}
