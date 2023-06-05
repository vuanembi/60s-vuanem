import NextImage from 'next/image';
import { Box, Divider, Flex } from '@chakra-ui/react';

import LOGO from '../public/logo-header.svg';

export const Header = () => {
    return (
        <Flex mb="32px" flexDirection="column" alignItems="center">
            <Box position="relative" w="100px" h="32px">
                <NextImage src={LOGO} alt="Logo" fill />
            </Box>
            <Divider mt="16px" borderColor="indigo.200" />
        </Flex>
    );
};
