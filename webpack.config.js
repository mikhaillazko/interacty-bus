const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

config = {
    target: "web",
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: "InteractyBus",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist")],
        }),
    ],
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
}

module.exports = (env, argv) => {
    if (argv.mode === "development") {
    } else if (argv.mode === "production") {
    } else {
        throw new Error("Specify env");
    }

    return config;
};