/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://friendly-dollop-54pv94996qjf49vr-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
