
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StringReplacePlugin = require("string-replace-webpack-plugin");

const path = require("path");
const extractPlugin = new ExtractTextPlugin("./assets/css");
const htmlTemplates = ["subscribe"];
const htmlPlugins = htmlTemplates.map((template) => new HtmlWebpackPlugin({ filename: `${template}.html`, template: `./pages/${template}.html` }));

const config = {
    mode: "production",
    // absolute path for project root
    context: path.resolve(__dirname, "src"),
    entry: ["./main.js"],
    output: {
        // absolute path declaration
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "./assets/js/[name].bundle.js"
    },
    module: {
        rules: [
            { // html-loader
                test: /\.html$/, use: [{
                    loader: "underscore-template-loader", query: {
                        prependFilenameComment: __dirname,
                    }
                }]
            },
            { // sass-loader with sourceMap activated
                test: /\.(scss|css)$/,
                include: [path.resolve(__dirname, "src", "assets", "css")],
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            // file-loader(for images)
            { test: /\.(jpg|png|gif)$/, use: [{ loader: "file-loader", options: { name: "[path][name].[ext]" } }] },
            // file-loader(for fonts)
            { test: /\.(woff|woff2|eot|ttf|otf|svg)$/, use: [{ loader: "file-loader", options: { name: "[path][name].[ext]" } }] },
            // file-loader(for favicon)
            { test: /\.(ico)$/, use: [{ loader: "file-loader", options: { name: "[path][name].[ext]" } }] },
        ]
    },
    plugins: [
        // cleaning up only "public" folder
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "index.html",
            minify: true
        }),
        // extract-text-webpack-plugin instance
        extractPlugin
    ],
    devServer: {
        // static files served from here
        contentBase: path.resolve(__dirname, "./src"),
        compress: true,
        // open app in localhost:2000
        port: 8400,
        stats: "errors-only",
        open: true
    },
    devtool: "inline-source-map"
};

config.plugins = config.plugins.concat(htmlPlugins);

module.exports = config;