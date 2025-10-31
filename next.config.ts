import {NextConfig} from 'next';
 
const nextConfig: NextConfig = {
  basePath: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
 
  typescript: {
    ignoreBuildErrors: true,
  },
 
  async rewrites() {
    return [
      {
        source: '/api', // All API calls starting with /api/v1
        destination: 'https://script.google.com/macros/s/AKfycby74X9nJRqkDmlO4pEic7wQHsBikcYivYIJDMB0k3koAxfvV_GWduBFQYWTuYUWZtjdFA/exec', // Proxy to backend API
      },
    ];
  },
};
 

module.exports = nextConfig;