import NextImage from 'next/image';
import { Box, Center, Divider, Flex } from '@chakra-ui/react';

import logoHeader from '../../public/logo-header.svg';

export const Header = () => {
    return (
        <Center as={Flex} mt="50px" flexDirection="column">
            <Box display="relative" width="80px">
                <NextImage src={logoHeader} alt="Logo" />
            </Box>
            <Divider mt="16px"/>
        </Center>
    );
};
