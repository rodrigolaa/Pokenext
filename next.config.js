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
}

}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', "cdn.traction.one"],
    unoptimized: true,
},
experimental: {
  //largePageDataBytes: 128 * 1000, // 128KB by default
    largePageDataBytes: 128 * 100000,
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