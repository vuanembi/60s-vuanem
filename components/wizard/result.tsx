import { Flex, Image, LinkBox, LinkOverlay, SimpleGrid, SlideFade, Text } from '@chakra-ui/react';

import { Product } from '../../hooks/use-wizard-form';
import { useAnimationOnMount } from '../../hooks/use-animation-on-mount';

type WizardResultProps = {
    products: Product[];
};

export const WizardResult = ({ products }: WizardResultProps) => {
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
                        borderWidth="1px"
                        borderColor="indigo.600"
                    >
                        <SlideFade in={isOpen}>
                            <Image src={item.imageSrc} alt={item.name} />
                            <LinkOverlay isExternal href={item.slug}>
                                <Text p="6px">{item.name}</Text>
                            </LinkOverlay>
                        </SlideFade>
                    </LinkBox>
                );
            })}
        </SimpleGrid>
    );
};
