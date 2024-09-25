import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'], // Add utfs.io to the list of allowed domains
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.plugins.push(
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[id].css',
                })
            );
        }
        return config;
    },
};

export default nextConfig;

