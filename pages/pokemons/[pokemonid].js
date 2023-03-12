
import Image from "next/image"

import styles from 'styles/Pokemon.module.css'

import {useRouter} from 'next/router'


export async function getStaticPaths() {

    // const maxPokemons = 1

    // const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    // const res = await fetch(`${api}/?limit=${maxPokemons}`)
  
    // let data = await res.json()

    // if (typeof data !== 'undefined') {
        
    //     data
        
    //   } else {
     const data = {
            count: 1281,
            next: 'https://pokeapi.co/api/v2/pokemon/?offset=2&limit=2',
            previous: null,
            results: [
              { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
              { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
            ]
          }
    //   }

    //params
    // console.log("PATHS:", data)

    const paths = data.results.map((pokemon, index) => {
        return {
        params: { pokemonid: (index + 1).toString()},
        }
    })

    return {
        paths,
        fallback: true,
    }

}

export async function getStaticProps(context) {

    const id = context.params.pokemonid
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    // console.log("DATA:", data)


    return {
        props: {pokemon: data}
    }
}

export default function Pokemon({pokemon}){

    const router = useRouter()

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            height = "200"
            width = "200"
            alt={pokemon.name} 
            />
            <div>
                <h3>Type:</h3>
                <div className={styles.types_container}>
                    {pokemon && pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    )
                    )}
                </div>
                <div className={styles.data_container}>
                    <div className={styles.data_height}>
                        <h4>Height:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className={styles.data_weight}>
                        <h4>Weight:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                    <div className={styles.data_weight}>
                    <h4>Abilities:</h4>
                    {pokemon.abilities.map((item, index) => (
                        <span key={index} className={`${styles.type}`}>{item.ability.name}</span>
                    )
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}