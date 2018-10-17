const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");
const args = require("yargs").argv;

const extractPlugin = new ExtractTextPlugin("./assets/css/app.css");
const isProd = args.p;
const htmlTemplates = ["subscribe"];
const htmlPlugins = htmlTemplates.map((template) => new HtmlWebpackPlugin({ filename: `${template}.html`, template: `./pages/${template}.html` }));

const config = {
    mode: "production",
    // absolute path for project root
    context: path.resolve(__dirname, "src"),
    entry: ["./main.js"],
    output: {
        // absolute path declaration
        publicPath: "",
        path: path.resolve(__dirname, "dist"),
        filename: "./assets/js/[name].bundle.js"
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
        }
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
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                url: false,
                                sourceMap: false
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            // file-loader(for images)
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]
            },
            // file-loader(for fonts)
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]
            },
            // file-loader(for favicon)
            {
                test: /\.(ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            minify: true
        }),
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
    }
};

if (isProd) {
    config.plugins.push(new OptimizeCssAssetsPlugin());
    // cleaning up only "public" folder
    config.plugins.push(new CleanWebpackPlugin(["dist"]));
    config.plugins.push(new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]));
}

config.plugins = config.plugins.concat(htmlPlugins);

module.exports = config;