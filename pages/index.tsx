import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Button, Flex, Heading, chakra } from '@chakra-ui/react';

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
            <Flex mt="32px" flexDirection="column" alignItems="center">
                <Heading as="h1" textAlign="center" fontSize="32px" fontWeight="medium" lineHeight={1.5}>
                    Tìm chiếc nệm tốt nhất với nhu cầu của bạn chỉ trong{' '}
                    <chakra.span fontWeight="bold">60s</chakra.span>
                </Heading>
            </Flex>
            <Button as={NextLink} href="/step-1" position="absolute" bottom="0px">
                Bắt đầu
            </Button>
        </Flex>
    );
};

export default Home;
