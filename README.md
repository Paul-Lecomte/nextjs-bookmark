
# Next.js Bookmark Extension

This is a bookmark manager Chrome extension built with Next.js. It allows you to manage your bookmarks efficiently and access them directly from your browser's toolbar.

## Features

- **Add and remove bookmarks**: Easily manage your bookmarks from the extension popup.
- **Organize your bookmarks**: Group bookmarks into categories for easy access.
- **Static Export**: The app is statically exported using Next.js for optimal performance and fast loading.
- **Chrome Extension**: The project is designed to be packaged as a Chrome extension for convenience.

## Technologies Used

- **Next.js**: React-based framework for building static websites and applications.
- **React**: JavaScript library for building user interfaces.
- **Material Tailwind**: A set of components built using Tailwind CSS and Material Design.

## Installation

To run this project locally, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Paul-Lecomte/nextjs-bookmark.git
   ```

2. **Install dependencies:**

   Navigate to the project folder and install the necessary dependencies:

   ```bash
   cd nextjs-bookmark
   npm install
   ```

3. **Build the project:**

   Build the project for production:

   ```bash
   npm run build
   ```

4. **Export the project as static files:**

   After the build completes, export the project as static files to the `out` directory:

   ```bash
   npm run export
   ```

5. **Load the extension in Chrome:**

    - Open `chrome://extensions/` in your browser.
    - Enable **Developer Mode** at the top right.
    - Click **Load unpacked** and select the `out` directory from your project.
    - The extension should now be installed and available in your browser's toolbar.

## Configuration

The configuration for static export is defined in the `next.config.js` file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // Static export output
  trailingSlash: true,
  distDir: 'out',      // Ensure 'out' is used for Next.js static export folder
};

module.exports = nextConfig;
```

This ensures that the Next.js project is exported as static files and can be used directly by the Chrome extension.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. Make sure to follow the coding style and conventions used in the project.

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a feature branch.
4. Make your changes and commit them.
5. Push your branch to your fork and create a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Next.js** for providing a powerful framework for building static websites and applications.
- **Tailwind CSS** for providing a utility-first CSS framework that simplifies styling.

## Contact

If you have any questions, feel free to contact me:

- GitHub: [https://github.com/Paul-Lecomte](https://github.com/Paul-Lecomte)