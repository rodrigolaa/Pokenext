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
  experimental: {
    //largePageDataBytes: 128 * 1000, // 128KB by default
      largePageDataBytes: 128 * 100000,
    },

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