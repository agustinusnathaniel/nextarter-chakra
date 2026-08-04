import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
    useTypeScriptCli: true,
  },
  partialPrefetching: true,
  reactStrictMode: true,
};

export default nextConfig;
