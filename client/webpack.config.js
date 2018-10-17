const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");
const extractPlugin = new ExtractTextPlugin("./assets/css/app.css");
const isProd = process.env.npm_config_prod;

const config = {
    // absolute path for project root
    context: path.resolve(__dirname, "src"),
    entry: ["./index.js"],
    output: {
        // absolute path declaration
        publicPath: "",
        path: path.resolve(__dirname, "public"),
        filename: "./assets/js/[name].bundle.js"
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            services: path.resolve(__dirname, 'src/services/'),
            api: path.resolve(__dirname, 'src/api/'),
            config: path.resolve(__dirname, 'src/config/')
        }
    },
    module: {
        rules: [

            // vue-loader (for .vue files)
            {
                loader: 'vue-loader',
                test: /\.vue$/
            },
            { // sass-loader with sourceMap activated
                test: /\.(scss|css)$/,
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
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
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            minify: true
        }),
        // extract-text-webpack-plugin instance
        extractPlugin
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        compress: true,
        port: 8200,
        stats: "errors-only",
        open: true,
        historyApiFallback: true
    }
};

if (isProd) {
    config.plugins.push(new OptimizeCssAssetsPlugin());
    // cleaning up only "public" folder
    config.plugins.push(new CleanWebpackPlugin(["public"]));
    config.plugins.push(new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]));
    config.plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            exclude: [/\.min\.js$/gi], // skip pre-minified libs
            mangle: true,
            output: {
                beautify: false,
                comments: false,
                webkit: true
            }
        }
    }));
}

module.exports = config;