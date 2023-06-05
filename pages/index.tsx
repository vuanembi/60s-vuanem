import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import HERO_IMAGE from '../public/hero.png';

const Home = () => {
    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="center">
            <Box
                position="relative"
                mt="32px"
                minW="320px"
                minH="320px"
                borderRadius="6px"
                overflow="hidden"
                boxShadow="inner"
            >
                <Image src={HERO_IMAGE} alt="Hero" fill />
            </Box>
            <Flex mt="32px" flexDirection="column" alignItems="center" color="indigo.600">
                <Heading as="h1" fontSize="32px" fontWeight="medium" lineHeight={1.5}>
                    Chọn nệm trong
                </Heading>
                <Heading as="h1" fontSize="36px" fontWeight="bold">
                    60s
                </Heading>
            </Flex>
            <Button
                as={NextLink}
                href="/wizard"
                position="absolute"
                bottom="0px"
                color="white"
                bgColor="indigo.600"
            >
                Bắt đầu
            </Button>
        </Flex>
    );
};

export default Home;
