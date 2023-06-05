import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: `'Quicksand', sans-serif;`,
        body: `'Quicksand', sans-serif;`,
    },
    colors: {
        indigo: {
            200: '#C7D2FE',
            600: '#4F46E5',
        },
        slate: {
            500: '#64748B',
        },
    },
});
