/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
});

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vuanem.com',
                port: '',
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
