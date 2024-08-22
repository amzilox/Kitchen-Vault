<h1 align="center">KitchenVault 🍲👩‍🍳</h1>

<h2 align="center">
Welcome to KitchenVault – your go-to app for discovering, saving, and sharing recipes!
</h2>

<h2 align="center">
This project features a powerful recipe finder with a user-friendly interface.
</h2>

<h2 align="center">
Designed with modern web technologies and Sass for enhanced styling. 🎨✨
</h2>

##

##

## Project Overview :

**[KitchenVault](https://kitchen-vault.netlify.app/)** is a recipe finder app that allows users to explore, save, and share recipes with ease. The app offers a sleek interface and robust search functionality, making it a valuable tool for home cooks and food enthusiasts.

## Key Technologies

- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**: Provides the structure of the webpage.
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Advanced styling techniques applied for a polished look.
- **[Sass](https://sass-lang.com)**: Used for efficient CSS management with **the 7-1 file architecture**.
- **[JavaScript MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)**: Implements the Model-View-Controller pattern for clean and organized code.
- **[GSAP](https://greensock.com/gsap/)**: Adds smooth and high-performance animations to enhance user experience.

## Known Issues

<p style="font-size: 1.4rem">⚠️ CSS/Sass Focus:</p>

While the application is fully functional with various JavaScript features, there are areas where the CSS/Sass implementation might still need attention:

- **Styling Consistency:** Some elements may not be styled consistently across all devices.
- **Responsive Design:** There may be additional tweaks needed to ensure the design is fully responsive.

These aspects are noted because <span style="font-weight: bold">the primary focus of this project was on implementing JavaScript functionalities and integrating third-party libraries while ensuring adherence to the MVC architecture. The Sass preprocessor was used for styling, and further refinements to the CSS/Sass implementation will be addressed in future updates.</span>

## Installation

<p style="font-size: 1.4rem">To set up CodeNest on your local machine, follow these steps: </p>

1. **Clone the Repository :**

```sh
git clone https://github.com/amzilox/Kitchen-Vault
```

```sh
cd Kitchen-Vault
```

2. **Install Dependencies :**

Ensure you have Node.js installed. Then, install the required npm packages:

```sh
npm install
```

3. **Run the Development Server :**

Use the following command to start the development server and watch for changes:

```sh
npm run start
```

<p style="font-size: 1.4rem">This command will simultaneously:    
</p>

- Watch for changes in Sass files and compile them to CSS.
- Initialize Parcel for bundling JavaScript files.
- Start a live server to serve your application with real-time updates.

4. **Build the Project:**

To compile and build the CSS for production, use:

```sh
npm run build
```

<p style="font-size: 1.4rem">This command will: 
</p>

- Compile Sass files and apply vendor prefixes.
- Minify the CSS for better performance.
- Bundle and optimize JavaScript files using Parcel, with the output placed in the ./dist directory.

## Package.json Highlights

<p style="font-size: 1.4rem">Here are some key packages used in this project :</p>

- **[node-sass](https://www.npmjs.com/package/node-sass)** : Compiles Sass into CSS.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)** : Adds vendor prefixes to CSS rules.
- **[parcel](https://www.npmjs.com/package/parcel)**: A zero-configuration web application bundler that compiles and bundles JavaScript, CSS, and other assets.
- **[postcss-cli](https://www.npmjs.com/package/postcss-cli)** : CLI tool for PostCSS, used for processing CSS.
- **[npm-run-all](https://www.npmjs.com/package/npm-run-all)** : A CLI tool to run multiple npm-scripts in parallel or sequential.
- **[gsap](https://www.npmjs.com/package/gsap)**: GreenSock Animation Platform for creating high-performance animations with a simple API.
- **[core-js](https://www.npmjs.com/package/core-js)**: Provides polyfills for modern JavaScript features to ensure compatibility with older environments.
- **[fraction.js](https://www.npmjs.com/package/fraction.js)**: A library for working with fractions in JavaScript.
- **[scrollmagic](https://www.npmjs.com/package/scrollmagic)**: JavaScript library for handling scroll interactions and animations.
- **[scrollmagic-plugin-gsap](https://www.npmjs.com/package/scrollmagic-plugin-gsap)**: Plugin for integrating GSAP animations with ScrollMagic for scroll-based animations.

## Credits

<h3 align="center">A special thanks to <span style="color: orangered">Jonas Schmedtmann</span> for his invaluable guidance and resources on using Sass and CSS architecture. 🙏🌟
</h3>

## Features

- 🔍 **Advanced Search**: Quickly search over 1,000,000 recipes.
- 📝 **Dynamic Listings**: View and paginate through recipe results.
- 💾 **Local Storage**: Bookmark and save your favorite recipes.
- 🌟 **Interactive Details**: Access detailed recipe information.
- 📦 **API Integration**: Fetch recipes from an external API.
- 🎨 **GSAP Animations**: Enjoy smooth, dynamic animations.
- 📲 **Responsive Design**: Optimized for both mobile and desktop.
- 🛠️ **MVC Architecture**: Clean and organized code structure.
- ✨ **Sass Styling**: Advanced and maintainable CSS.

## Disclaimer

<h3 align="center">⚠️Learning Purposes Only
</h3>

<p style="font-size: 1.3rem; text-align: center">This project is created for educational purposes to showcase skills in <span style="font-weight:700">HTML, CSS, Sass, and advanced JavaScript</span>. It demonstrates the implementation of logical functionalities such as search queries, pagination, recipe bookmarking, local storage management, and API integration. This project is not intended for commercial use. Feel free to explore the code and contact me with any questions or for further details.
</p>
