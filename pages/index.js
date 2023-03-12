// import PokemonSearch from '@/components/SearchBox'
import styles from '@/styles/Home.module.css'

import Image from 'next/image'

import Card from '../components/Card'

import {useRouter} from 'next/router'


export async function getStaticProps(){

  // const maxPokemons = 250

  // const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon//?limit=250`)

  const data = await res.json()

  //add pokemon index


  data.results.forEach((item,index)=> {
    item.id = index + 1

  })

  //console.log(data.results)

  return {
    props: {
      // pokemons: data.results
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
        },
        {
          name: 'metapod',
          url: 'https://pokeapi.co/api/v2/pokemon/11/',
          id: 11
        },
        {
          name: 'butterfree',
          url: 'https://pokeapi.co/api/v2/pokemon/12/',
          id: 12
        },
        {
          name: 'weedle',
          url: 'https://pokeapi.co/api/v2/pokemon/13/',
          id: 13
        },
        {
          name: 'kakuna',
          url: 'https://pokeapi.co/api/v2/pokemon/14/',
          id: 14
        },
        {
          name: 'beedrill',
          url: 'https://pokeapi.co/api/v2/pokemon/15/',
          id: 15
        },
        {
          name: 'pidgey',
          url: 'https://pokeapi.co/api/v2/pokemon/16/',
          id: 16
        },
        {
          name: 'pidgeotto',
          url: 'https://pokeapi.co/api/v2/pokemon/17/',
          id: 17
        },
        {
          name: 'pidgeot',
          url: 'https://pokeapi.co/api/v2/pokemon/18/',
          id: 18
        },
        {
          name: 'rattata',
          url: 'https://pokeapi.co/api/v2/pokemon/19/',
          id: 19
        },
        {
          name: 'raticate',
          url: 'https://pokeapi.co/api/v2/pokemon/20/',
          id: 20
        },
        {
          name: 'spearow',
          url: 'https://pokeapi.co/api/v2/pokemon/21/',
          id: 21
        },
        {
          name: 'fearow',
          url: 'https://pokeapi.co/api/v2/pokemon/22/',
          id: 22
        },
        {
          name: 'ekans',
          url: 'https://pokeapi.co/api/v2/pokemon/23/',
          id: 23
        },
        {
          name: 'arbok',
          url: 'https://pokeapi.co/api/v2/pokemon/24/',
          id: 24
        },
        {
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
          id: 25
        },
        {
          name: 'raichu',
          url: 'https://pokeapi.co/api/v2/pokemon/26/',
          id: 26
        },
        {
          name: 'sandshrew',
          url: 'https://pokeapi.co/api/v2/pokemon/27/',
          id: 27
        },
        {
          name: 'sandslash',
          url: 'https://pokeapi.co/api/v2/pokemon/28/',
          id: 28
        },
        {
          name: 'nidoran-f',
          url: 'https://pokeapi.co/api/v2/pokemon/29/',
          id: 29
        },
        {
          name: 'nidorina',
          url: 'https://pokeapi.co/api/v2/pokemon/30/',
          id: 30
        },
        {
          name: 'nidoqueen',
          url: 'https://pokeapi.co/api/v2/pokemon/31/',
          id: 31
        },
        {
          name: 'nidoran-m',
          url: 'https://pokeapi.co/api/v2/pokemon/32/',
          id: 32
        },
        {
          name: 'nidorino',
          url: 'https://pokeapi.co/api/v2/pokemon/33/',
          id: 33
        },
        {
          name: 'nidoking',
          url: 'https://pokeapi.co/api/v2/pokemon/34/',
          id: 34
        },
        {
          name: 'clefairy',
          url: 'https://pokeapi.co/api/v2/pokemon/35/',
          id: 35
        },
        {
          name: 'clefable',
          url: 'https://pokeapi.co/api/v2/pokemon/36/',
          id: 36
        },
        {
          name: 'vulpix',
          url: 'https://pokeapi.co/api/v2/pokemon/37/',
          id: 37
        },
        {
          name: 'ninetales',
          url: 'https://pokeapi.co/api/v2/pokemon/38/',
          id: 38
        },
        {
          name: 'jigglypuff',
          url: 'https://pokeapi.co/api/v2/pokemon/39/',
          id: 39
        },
        {
          name: 'wigglytuff',
          url: 'https://pokeapi.co/api/v2/pokemon/40/',
          id: 40
        },
        {
          name: 'zubat',
          url: 'https://pokeapi.co/api/v2/pokemon/41/',
          id: 41
        },
        {
          name: 'golbat',
          url: 'https://pokeapi.co/api/v2/pokemon/42/',
          id: 42
        },
        {
          name: 'oddish',
          url: 'https://pokeapi.co/api/v2/pokemon/43/',
          id: 43
        },
        {
          name: 'gloom',
          url: 'https://pokeapi.co/api/v2/pokemon/44/',
          id: 44
        },
        {
          name: 'vileplume',
          url: 'https://pokeapi.co/api/v2/pokemon/45/',
          id: 45
        },
        {
          name: 'paras',
          url: 'https://pokeapi.co/api/v2/pokemon/46/',
          id: 46
        },
        {
          name: 'parasect',
          url: 'https://pokeapi.co/api/v2/pokemon/47/',
          id: 47
        },
        {
          name: 'venonat',
          url: 'https://pokeapi.co/api/v2/pokemon/48/',
          id: 48
        },
        {
          name: 'venomoth',
          url: 'https://pokeapi.co/api/v2/pokemon/49/',
          id: 49
        },
        {
          name: 'diglett',
          url: 'https://pokeapi.co/api/v2/pokemon/50/',
          id: 50
        },
        {
          name: 'dugtrio',
          url: 'https://pokeapi.co/api/v2/pokemon/51/',
          id: 51
        },
        {
          name: 'meowth',
          url: 'https://pokeapi.co/api/v2/pokemon/52/',
          id: 52
        },
        {
          name: 'persian',
          url: 'https://pokeapi.co/api/v2/pokemon/53/',
          id: 53
        },
        {
          name: 'psyduck',
          url: 'https://pokeapi.co/api/v2/pokemon/54/',
          id: 54
        },
        {
          name: 'golduck',
          url: 'https://pokeapi.co/api/v2/pokemon/55/',
          id: 55
        },
        {
          name: 'mankey',
          url: 'https://pokeapi.co/api/v2/pokemon/56/',
          id: 56
        },
        {
          name: 'primeape',
          url: 'https://pokeapi.co/api/v2/pokemon/57/',
          id: 57
        },
        {
          name: 'growlithe',
          url: 'https://pokeapi.co/api/v2/pokemon/58/',
          id: 58
        },
        {
          name: 'arcanine',
          url: 'https://pokeapi.co/api/v2/pokemon/59/',
          id: 59
        },
        {
          name: 'poliwag',
          url: 'https://pokeapi.co/api/v2/pokemon/60/',
          id: 60
        },
        {
          name: 'poliwhirl',
          url: 'https://pokeapi.co/api/v2/pokemon/61/',
          id: 61
        },
        {
          name: 'poliwrath',
          url: 'https://pokeapi.co/api/v2/pokemon/62/',
          id: 62
        },
        {
          name: 'abra',
          url: 'https://pokeapi.co/api/v2/pokemon/63/',
          id: 63
        },
        {
          name: 'kadabra',
          url: 'https://pokeapi.co/api/v2/pokemon/64/',
          id: 64
        },
        {
          name: 'alakazam',
          url: 'https://pokeapi.co/api/v2/pokemon/65/',
          id: 65
        },
        {
          name: 'machop',
          url: 'https://pokeapi.co/api/v2/pokemon/66/',
          id: 66
        },
        {
          name: 'machoke',
          url: 'https://pokeapi.co/api/v2/pokemon/67/',
          id: 67
        },
        {
          name: 'machamp',
          url: 'https://pokeapi.co/api/v2/pokemon/68/',
          id: 68
        },
        {
          name: 'bellsprout',
          url: 'https://pokeapi.co/api/v2/pokemon/69/',
          id: 69
        },
        {
          name: 'weepinbell',
          url: 'https://pokeapi.co/api/v2/pokemon/70/',
          id: 70
        },
        {
          name: 'victreebel',
          url: 'https://pokeapi.co/api/v2/pokemon/71/',
          id: 71
        },
        {
          name: 'tentacool',
          url: 'https://pokeapi.co/api/v2/pokemon/72/',
          id: 72
        },
        {
          name: 'tentacruel',
          url: 'https://pokeapi.co/api/v2/pokemon/73/',
          id: 73
        },
        {
          name: 'geodude',
          url: 'https://pokeapi.co/api/v2/pokemon/74/',
          id: 74
        },
        {
          name: 'graveler',
          url: 'https://pokeapi.co/api/v2/pokemon/75/',
          id: 75
        },
        {
          name: 'golem',
          url: 'https://pokeapi.co/api/v2/pokemon/76/',
          id: 76
        },
        {
          name: 'ponyta',
          url: 'https://pokeapi.co/api/v2/pokemon/77/',
          id: 77
        },
        {
          name: 'rapidash',
          url: 'https://pokeapi.co/api/v2/pokemon/78/',
          id: 78
        },
        {
          name: 'slowpoke',
          url: 'https://pokeapi.co/api/v2/pokemon/79/',
          id: 79
        },
        {
          name: 'slowbro',
          url: 'https://pokeapi.co/api/v2/pokemon/80/',
          id: 80
        },
        {
          name: 'magnemite',
          url: 'https://pokeapi.co/api/v2/pokemon/81/',
          id: 81
        },
        {
          name: 'magneton',
          url: 'https://pokeapi.co/api/v2/pokemon/82/',
          id: 82
        },
        {
          name: 'farfetchd',
          url: 'https://pokeapi.co/api/v2/pokemon/83/',
          id: 83
        },
        {
          name: 'doduo',
          url: 'https://pokeapi.co/api/v2/pokemon/84/',
          id: 84
        },
        {
          name: 'dodrio',
          url: 'https://pokeapi.co/api/v2/pokemon/85/',
          id: 85
        },
        {
          name: 'seel',
          url: 'https://pokeapi.co/api/v2/pokemon/86/',
          id: 86
        },
        {
          name: 'dewgong',
          url: 'https://pokeapi.co/api/v2/pokemon/87/',
          id: 87
        },
        {
          name: 'grimer',
          url: 'https://pokeapi.co/api/v2/pokemon/88/',
          id: 88
        },
        { name: 'muk', url: 'https://pokeapi.co/api/v2/pokemon/89/', id: 89 },
        {
          name: 'shellder',
          url: 'https://pokeapi.co/api/v2/pokemon/90/',
          id: 90
        },
        {
          name: 'cloyster',
          url: 'https://pokeapi.co/api/v2/pokemon/91/',
          id: 91
        },
        {
          name: 'gastly',
          url: 'https://pokeapi.co/api/v2/pokemon/92/',
          id: 92
        },
        {
          name: 'haunter',
          url: 'https://pokeapi.co/api/v2/pokemon/93/',
          id: 93
        },
        {
          name: 'gengar',
          url: 'https://pokeapi.co/api/v2/pokemon/94/',
          id: 94
        },
        {
          name: 'onix',
          url: 'https://pokeapi.co/api/v2/pokemon/95/',
          id: 95
        },
        {
          name: 'drowzee',
          url: 'https://pokeapi.co/api/v2/pokemon/96/',
          id: 96
        },
        {
          name: 'hypno',
          url: 'https://pokeapi.co/api/v2/pokemon/97/',
          id: 97
        },
        {
          name: 'krabby',
          url: 'https://pokeapi.co/api/v2/pokemon/98/',
          id: 98
        },
        {
          name: 'kingler',
          url: 'https://pokeapi.co/api/v2/pokemon/99/',
          id: 99
        },
        {
          name: 'voltorb',
          url: 'https://pokeapi.co/api/v2/pokemon/100/',
          id: 100
        },
    ]
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
