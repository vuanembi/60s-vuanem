import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DefaultSeo } from 'next-seo';

import { theme } from '../style/theme';
import { Layout } from '../components/layout';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo title="Chọn nệm 60s - vuanem" />
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
};

export default App;
