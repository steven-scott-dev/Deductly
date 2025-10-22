/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Completely skip ESLint during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
