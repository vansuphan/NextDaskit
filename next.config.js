const path = require("path");

module.exports = {
  webpack(config, { dev, isServer }) {
    
    // for reading & parsing SVG files:
    config.module.rules.push({
      test: /\.svg$/i,
      exclude: [path.resolve("node_modules")],
      use: [
        {
          loader: "raw-loader",
          options: {
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};