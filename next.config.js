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

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
},
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.node = {
      fs: 'empty'
    }
  }
  config.optimization.minimize = true
  config.optimization.minimizer = []
  return config
}

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