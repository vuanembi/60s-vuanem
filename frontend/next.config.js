/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vuanem.com',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
