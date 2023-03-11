// import { useState } from 'react';

// import { useRouter } from 'next/router';

// import styles from 'styles/Search.module.css'
// import Link from 'next/link';


// export default function PokemonSearch() {

//         const [searchTerm, setSearchTerm] = useState('');


//         const router = useRouter()
      
//         const handleInputChange = (event) => {
//           setSearchTerm(event.target.value);
//         };

//             const filteredPokemons = []
//             // pokemons ?  searchTerm.length >= 1 ? pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10):[] : [] ;
            

//       function handleSearch(){
//        console.log(`Search query: ${searchTerm}` )
//         if(filteredPokemons.length == 0){
//          router.push(`/pokemons/${searchTerm}`)

//         }
//         else{
//          router.push(`/pokemons/${filteredPokemons[0].id}`)

//         }
//   };
//   return (
//     <>
//               <div>
//             <ul>
//             <input className = {styles.input} type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search for a pokemon" />
//             <button onClick={handleSearch} className = {styles.btn}>Search</button>
//             </ul>
//             <ul>
//               {filteredPokemons.map((pokemon) => (
//                 <li key={pokemon.id}>
//                   <Link href={`pokemons/${pokemon.id}`}>{pokemon.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
    
//     </>

//         );
//       }      
      
// function SearchBox() {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);


//   };

//   function handleSearch(){
//     console.log(`Search query: ${query}`);
//   };

//   return (
//     <div  className = {styles.box}>
//     <ul>
//             <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={handleInputChange}
//             className = {styles.input}
//         />
//         <button onClick={handleSearch} className = {styles.btn}>Search</button>
//     </ul>
//     </div>
      
//   );


// }


  
// export default PokemonSearch;