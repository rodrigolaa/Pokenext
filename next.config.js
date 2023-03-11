/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.traction.one',
        port: '',
        pathname: 'pokedex/**',
      },
    ],
  },

}

// module.exports = nextConfig

module.exports = {

}
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  
}

// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.traction.one',
//         port: '',
//         pathname: '/pokedex/**/**',
//       },
//     ],
//   },
// }