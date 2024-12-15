/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000', // localhost
            'https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev', // Codespaces
          ],
        },
      },
};

export default nextConfig;
