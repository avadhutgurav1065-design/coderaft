/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Generates sitemap-friendly output */
  output: undefined, // keep default for dev; set to 'export' for static if needed

  /* Image optimization */
  images: {
    formats: ['image/webp'],
  },
};

export default nextConfig;
