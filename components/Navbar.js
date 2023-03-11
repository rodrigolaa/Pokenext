import Image from "next/image"
import Link from "next/link"
import styles from "styles/Navbar.module.css"
import PokemonSearch from './SearchBox';


export default function Navbar({data}){
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width="30" height="30" alt="PokeNext"/>
                <h1>PokeDex</h1>
            </div>
            
            <ul className={styles.link_items}>
                <li>
                    <PokemonSearch pokemons={data}/>
                </li>
                
                <li>
                    <Link href="/" legacyBehavior><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior><a>About</a></Link>
                </li>
            </ul>
        </nav>
    )
}