/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export', // ensures `next export` works
    // basePath is required if deploying to a GitHub Pages repo under a username or project
    // Example: https://username.github.io/repo-name
    // basePath: '/repo-name',
};

module.exports = nextConfig;
