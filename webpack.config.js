const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const absPath = relPath => path.resolve(appDirectory, relPath);
const packageJson = require("./package.json");

const common = {
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, "build")
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: absPath("src"),
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                include: absPath("src"),
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin(["public"])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
}

const testPage = {
    ...common,
    entry: {
        helloElement: "./src/HelloElement.js",
        selectCompanyElement: "./src/SelectCompanyElement.ts"
    },
    output: {
        ...common.output,
        filename: "static/js/[name].[contenthash:8].js",
    },
    plugins: [
        ...common.plugins,
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            template: "./src/indexTemplate.html",
            chunks: ["helloElement"],
            chunksSortMode: "manual"
        }),
        new HtmlWebpackPlugin({
            filename: "indexSelect.html",
            inject: "body",
            template: "./src/indexSelectTemplate.html",
            chunks: ["selectCompanyElement"],
            chunksSortMode: "manual"
        }),
    ]
}

const customElementsDist = {
    ...common,
    entry: {
        helloElement: "./src/HelloElement.js",
        selectCompanyElement: "./src/SelectCompanyElement.ts"
    },
    output: {
        ...common.output,
        filename: `dist/js/[name].${packageJson.version}.js`,
    },
}

module.exports = [testPage, customElementsDist]
