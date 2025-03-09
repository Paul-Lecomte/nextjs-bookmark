/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Export as static files
    trailingSlash: true, // Ensure trailing slash for Chrome extensions
    distDir: 'build',  // Custom directory to store the build files
};

module.exports = nextConfig;