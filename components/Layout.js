import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"

export default function Layout({pokemons,children}){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="../images/favicon.ico"/>
            <title>PokeDex</title>
        </Head>
            <Navbar pokemons = {pokemons}/>
                <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}