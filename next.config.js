const path = require('node:path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1d4-2LEnHhnjLB6ox6btH9njXeiYQmD8H/view',
        permanent: false,
      },
    ]
  },

}
