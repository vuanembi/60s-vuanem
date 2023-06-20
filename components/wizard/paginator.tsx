import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { Button, Flex, Heading, SlideFade } from '@chakra-ui/react';
import { useWizard } from 'react-use-wizard';

import { useAnimationOnMount } from '../../hooks/use-animation-on-mount';

type WizardPaginatorProps = PropsWithChildren<{ question: string }>;

export const WizardPaginator = ({ question, children }: WizardPaginatorProps) => {
    const { isOpen } = useAnimationOnMount();

    const router = useRouter();

    const { previousStep, nextStep, activeStep, stepCount, isFirstStep } = useWizard();

    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="stretch">
            <Heading as="h2" mb="24px" textAlign="center" fontSize="20px">
                {question}
            </Heading>
            <SlideFade reverse in={isOpen}>
                {children}
            </SlideFade>
            <Flex w="full" position="absolute" bottom="0px" justifyContent="space-between">
                <Button
                    variant="outline"
                    onClick={() => (isFirstStep ? router.push('/') : previousStep())}
                >
                    Quay lại
                </Button>
                <Button
                    type={activeStep === stepCount - 2 ? 'submit' : 'button'}
                    onClick={nextStep}
                >
                    Tiếp tục
                </Button>
            </Flex>
        </Flex>
    );
};
