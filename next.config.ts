import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // GitHub Pages serves this repository below /solid-geometry/.
  output: 'export',
  ...(githubPages
    ? {
        basePath: '/solid-geometry',
        assetPrefix: '/solid-geometry/',
      }
    : {}),
};

export default nextConfig;
