import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
    // Cloudflare Pages rejects assets over 25 MiB, and this cache is never
    // reused in CI, so skip writing it.
    turbopackFileSystemCacheForBuild: false,
    useTypeScriptCli: true,
  },
  partialPrefetching: true,
  reactStrictMode: true,
};

export default nextConfig;
