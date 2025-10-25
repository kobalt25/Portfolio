import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images:{
        unoptimized: true,
    },
    assetPrefix: isProd ? '/kobalt25.github.io' : '',
    basePath: isProd ? '/kobalt25.github.io' : '',
    output: 'export'
    /* config options here */
}

export default nextConfig