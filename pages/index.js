// import PokemonSearch from '@/components/SearchBox'
import styles from '@/styles/Home.module.css'

import Image from 'next/image'

import Card from '../components/Card'

import {useRouter} from 'next/router'


export async function getStaticProps( ){

  const maxPokemons = 251

  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  //add pokemon index


  data.results.forEach((item,index)=> {
    item.id = index + 1

  })

  return {
    props: {
      pokemons: data.results,
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
