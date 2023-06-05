import { PropsWithChildren } from 'react';
import { Container } from '@chakra-ui/react';

import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Container
            px="32px"
            pt="16px"
            display="flex"
            flexDirection="column"
            minH="100vh"
            alignItems="stretch"
        >
            <Header />
            <main>{children}</main>
        </Container>
    );
};
