import { PropsWithChildren } from 'react';
import { Container, Flex } from '@chakra-ui/react';

import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Container
            as={Flex}
            flexDirection="column"
            alignItems="stretch"
            maxW="container.md"
            px="32px"
            pt="16px"
            minH="100vh"
        >
            <Header />
            <main>{children}</main>
        </Container>
    );
};
