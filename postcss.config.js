
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: {
        layers: ['utilities'],
            content: [
            // Paths to your templates...
        ],
    },
};
