import NextImage from 'next/image';
import NextLink from 'next/link';
import { Divider, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';

import LOGO from '../public/logo-header.svg';

export const Header = () => {
    return (
        <Flex as="nav" mb="32px" flexDirection="column" alignItems="center">
            <LinkBox position="relative" w="100px" h="32px">
                <LinkOverlay as={NextLink} href="/">
                    <NextImage src={LOGO} alt="Logo" fill />
                </LinkOverlay>
            </LinkBox>
            <Divider mt="16px" borderColor="indigo.200" />
        </Flex>
    );
};
