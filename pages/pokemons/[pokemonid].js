
import Image from "next/image"

import styles from 'styles/Pokemon.module.css'


export async function getStaticPaths() {

    const maxPokemons = 800

    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
  
    const data = await res.json()

    //params

    const paths = data.results.map((pokemon, index) => {
        return {
        params: { pokemonid: (index + 1).toString()},
        }
    })

    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps(context) {

    const id = context.params.pokemonid
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: {pokemon: data}
    }
}

export default function Pokemon({pokemon}){
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
                    {pokemon.types.map((item, index) => (
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