/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Use modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Define image sizes for the sizes prop
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize image processing time
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
