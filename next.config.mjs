/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/blog",
      destination: "/",
      permanent: true,
    },
  ],
}

export default nextConfig
