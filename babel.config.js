module.exports = function (api) {
    api.cache(true);

    const rootImportOpts = {
        paths: [
            {
                root: __dirname,
                rootPathPrefix: '~/',
                rootPathSuffix: 'src',
            },
        ],
    };

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['babel-plugin-root-import', rootImportOpts],
            [
                'module-resolver',
                {
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
