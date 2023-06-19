import { VStack } from '@chakra-ui/react';
import { Control } from 'react-hook-form';

import { GetProductsFormValues } from '../../hooks/use-wizard-form';
import { WizardPaginator } from '../wizard/paginator';
import { QuestionSlider, QuestionSliderProps } from './slider-question';

export type SliderQuestionStepProps = {
    question: string;
    questions: Omit<QuestionSliderProps, 'control'>[];
    control: Control<GetProductsFormValues>;
};

export const SliderQuestionStep = (props: SliderQuestionStepProps) => {
    return (
        <WizardPaginator question={props.question}>
            <VStack alignItems="stretch" spacing="24px">
                {props.questions.map((question) => (
                    <QuestionSlider key={question.name} control={props.control} {...question} />
                ))}
            </VStack>
        </WizardPaginator>
    );
};
