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
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      config.optimization.minimize = true
      config.optimization.minimizer = []
      return config
    },
    // Increase the memory limit for the build process
    env: {
      NODE_OPTIONS: "--max_old_space_size=4096"
    }
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