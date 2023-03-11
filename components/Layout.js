import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"

export default function Layout({pokemons, children}){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="../images/favicon.ico"/>
            <title>PokeNext</title>
        </Head>
            <Navbar data = {pokemons}/>
                <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}