import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: `'Quicksand', sans-serif;`,
        body: `'Quicksand', sans-serif;`,
    },
    colors: {
        indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
        },
        slate: {
            500: '#64748B',
        },
    },
    components: {
        Button: {
            baseStyle: {
                width: '132px',
                px: '8px',
                fontWeight: 'bold',
            },
            defaultProps: {
                colorScheme: 'indigo',
            },
        },
        Heading: {
            baseStyle: {
                color: 'indigo.600',
                fontWeight: 'bold',
            },
        },
        Text: {
            baseStyle: {
                color: 'indigo.600',
                fontWeight: 'medium',
            },
        },
    },
});
