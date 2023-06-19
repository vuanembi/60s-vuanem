import { useRouter } from 'next/router';
import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { Control } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

import { GetProductsFormValues } from '../../hooks/use-wizard-form';
import { QuestionSlider, QuestionSliderProps } from './slider-question';

export type SliderQuestionStepProps = {
    question: string;
    questions: Omit<QuestionSliderProps, 'control'>[];
    control: Control<GetProductsFormValues>;
};

export const SliderQuestionStep = (props: SliderQuestionStepProps) => {
    const router = useRouter();

    const { previousStep, nextStep, activeStep, stepCount, isFirstStep } = useWizard();

    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="stretch">
            <Heading as="h2" mb="24px" textAlign="center" fontSize="20px">
                {props.question}
            </Heading>
            <VStack alignItems="stretch" spacing="24px">
                {props.questions.map((question) => (
                    <QuestionSlider key={question.name} control={props.control} {...question} />
                ))}
            </VStack>
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
