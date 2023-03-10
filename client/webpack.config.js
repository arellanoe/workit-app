const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
    return {
        mode: 'development',
        //Entry point for files
        entry: {
            main: './src/index.js',
            install: './src/js/install.js',
            // editor: './src/js/editor.js',
        },
        //Output for our bundles
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            //Webpack plugin that generates the html file and injects our bundles
            new HtmlWebpackPlugin({
                template: './index.html',
                title: "Work It!",
            }),

            //Inject our custom service worker
            new InjectManifest({
                swSrc: './src-sw.js',
                swDest: 'src-sw.js',
            }),

            //Create a manifest.json file
            new WebpackPwaManifest({
                fingerprints: true,
                inject: true,
                name: "Work It!",
                short_name: "Work",
                description: "Just a blog...",
                background_color: "#225ca3",
                theme_color: "#225ca3",
                start_url: "./",
                publicPath: "./",
            }),
        ],
    
        module: {
            //CSS loaders
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    // We use babel-loader in order to use ES6.
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/transform-runtime"
                            ],
                        },
                    },
                },
            ],
        },    
    };
};