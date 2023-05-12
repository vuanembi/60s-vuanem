import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    );
};

export default App;
