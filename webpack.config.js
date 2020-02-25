const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.pug',
            filename: 'index.html'

        })],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loaders: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            "pretty": true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{ loader: 'file-loader' }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{ loader: 'file-loader' }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    }
};