import Image from "next/image"
import Link from "next/link"
import styles from "styles/Navbar.module.css"
import PokemonSearch from './SearchBox';


export default function Navbar({pokemons}){
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width="30" height="30" alt="PokeNext"/>
                <h1 className={styles.h1}>PokeDex</h1>
            </div>
            <div>
            <ul className= {styles.link_items}>
                    <PokemonSearch  pokemons = {pokemons}/>
                    <Link href="/" legacyBehavior><a>Home</a></Link>
                    <Link href="/about" legacyBehavior><a>About</a></Link>
            </ul>
            </div>
            
        </nav>
    )
}