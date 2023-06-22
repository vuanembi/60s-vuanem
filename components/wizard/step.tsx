import { PropsWithChildren, useMemo } from 'react';
import { Box, Button, Flex, Heading, SlideFade, Progress, Text, chakra, useToken } from '@chakra-ui/react';

import { useAnimationOnMount } from '../../hooks/use-animation-on-mount';

type WizardStepProps = PropsWithChildren<{
    prompt: string;
    subtitle?: string;
    step: number;
    secondaryBtnOnClick: () => void;
    onSubmit: (value: any) => void;
}>;

export const WizardStep = (props: WizardStepProps) => {
    const stepCount = useMemo(() => 7, []);

    const { prompt, subtitle, step, secondaryBtnOnClick, onSubmit, children } = props;

    const { isOpen } = useAnimationOnMount();

    return (
        <>
            <Flex mb="24px" flexDirection="column">
                <Flex justifyContent="flex-end">
                    <Text>
                        {step}
                        <chakra.span color="slate.500">{` / ${stepCount}`}</chakra.span>
                    </Text>
                </Flex>
                <Progress
                    mt="12px"
                    bgColor="indigo.200"
                    borderRadius="80px"
                    sx={{
                        '& > div': { 'background-color': 'indigo.600' },
                    }}
                    max={stepCount}
                    value={step}
                />
            </Flex>
            <form onSubmit={onSubmit}>
                <Flex position="relative" minH="600px" flexDirection="column" alignItems="stretch">
                    <Box flexDirection="column" minH="110px">
                        <Heading as="h2" textAlign="center" fontSize="20px">
                            {prompt}
                        </Heading>
                        {subtitle && (
                            <Heading as="h3" textAlign="center" fontWeight="medium" fontSize="14px">
                                {subtitle}
                            </Heading>
                        )}
                    </Box>
                    <SlideFade reverse in={isOpen}>
                        {children}
                    </SlideFade>
                    <Flex w="full" position="absolute" bottom="0px" justifyContent="space-between">
                        <Button variant="outline" onClick={secondaryBtnOnClick}>
                            Quay lại
                        </Button>
                        <Button type="submit">Tiếp tục</Button>
                    </Flex>
                </Flex>
            </form>
        </>
    );
};
