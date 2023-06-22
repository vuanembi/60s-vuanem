import { Flex, Image, LinkBox, LinkOverlay, SimpleGrid, SlideFade, Text, useToken } from '@chakra-ui/react';
import ReactStars from 'react-stars';

import { Product } from '../../hooks/use-wizard-form';
import { useAnimationOnMount } from '../../hooks/use-animation-on-mount';

type WizardResultProps = {
    products: Product[];
};

export const WizardResult = ({ products }: WizardResultProps) => {
    const [yellow300, slate500] = useToken('colors', ['yellow.300', 'slate.500']);
    const { isOpen } = useAnimationOnMount();

    return (
        <SimpleGrid mt="24px" columns={{ base: 2, md: 3 }} spacing="20px">
            {products.map((item) => {
                return (
                    <LinkBox
                        as={Flex}
                        key={item.slug}
                        flexDirection="column"
                        alignItems="stretch"
                        borderRadius="6px"
                        boxShadow="base"
                    >
                        <SlideFade in={isOpen}>
                            <Image borderRadius="6px 6px 0px 0px" src={item.imageSrc} alt={item.name} />
                            <Flex flexDirection="column" p="8px">
                                <ReactStars
                                    count={5}
                                    size={16}
                                    color1={slate500}
                                    color2={yellow300}
                                    value={item.rating}
                                />
                                <LinkOverlay isExternal href={item.slug}>
                                    <Text>{item.name}</Text>
                                </LinkOverlay>
                            </Flex>
                        </SlideFade>
                    </LinkBox>
                );
            })}
        </SimpleGrid>
    );
};
