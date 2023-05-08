import { PropsWithChildren } from 'react';
import NextImage from 'next/image';
import { Box, Divider, Flex } from '@chakra-ui/react';

import logoHeader from '../../public/logo-header.svg';

export const Header = ({ children }: PropsWithChildren) => {
    return (
        <Flex mt="40px" mb="22px" flexDirection="column" alignItems="stretch">
            <Flex flexDirection="column" alignItems="center">
                <Box display="relative" width="80px">
                    <NextImage src={logoHeader} alt="Logo" />
                </Box>
                <Divider mt="16px" />
            </Flex>
            {children}
        </Flex>
    );
};
