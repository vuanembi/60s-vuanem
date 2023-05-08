import Image from 'next/image';
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';

import logo from '../public/logo.svg';
import hero from '../public/hero.svg';

export default function Home() {
    return (
        <Center
            as="main"
            minH="100vh"
            px={{ base: '0px', md: '12.5vw' }}
            py={{ base: '0px', md: '12.5vh' }}
            bgColor={{ base: 'white', md: '#F4F5FF' }}
        >
            <Flex
                px={{ base: '30px', md: '60px' }}
                py={{ base: '0px', md: '90px' }}
                flexDirection={{ base: 'column-reverse', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                bgColor="white"
                borderRadius="10px"
            >
                <Flex
                    flex={{ base: '1', md: '0 0 35%' }}
                    flexDirection="column"
                    alignItems={{ base: 'center', md: 'flex-start' }}
                >
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Box display="relative" mb={{ base: '0px', md: '80px' }} minH="75px">
                            <Image src={logo} alt="Hero image" />
                        </Box>
                    </Box>
                    <Heading
                        mt={{ base: '28px', md: '0px' }}
                        color="#2D2E7F"
                        textAlign={{ base: 'center', md: 'left' }}
                        fontSize={{ base: '22px', md: '40px' }}
                        lineHeight={{ base: '30px', md: '60px' }}
                    >
                        Tìm chiếc nệm tốt nhất với nhu cầu của bạn chỉ trong 60s
                    </Heading>
                    <Button
                        mt={{ base: '28px', md: '40px' }}
                        px="85px"
                        color="white"
                        bgColor="#0040BB"
                    >
                        Bắt đầu
                    </Button>
                </Flex>
                <Box flex={{ base: '1', md: '0 0 50%' }}>
                    <Box display="relative" minW="280px">
                        <Image src={hero} alt="Hero image" />
                    </Box>
                </Box>
            </Flex>
        </Center>
    );
}
