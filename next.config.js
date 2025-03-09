/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Export as static files
    trailingSlash: true, // Ensure trailing slash for Chrome extensions
};

module.exports = nextConfig;