import { useForm } from 'react-hook-form';
import { VStack } from '@chakra-ui/react';

import { SliderQuestion } from '../components/slider-question/slider-question';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step3Questions = {
    question31: number;
    question32: number;
    question33: number;
    question34: number;
};

const Step3 = () => {
    const { prompt, subtitle, question31, question32, question33, question34, setValue } = useWizardStore(
        (state) => state.question3,
    );

    const { control, handleSubmit } = useForm<Step3Questions>({
        defaultValues: {
            question31: question31.value,
            question32: question32.value,
            question33: question33.value,
            question34: question34.value,
        },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 3, previous: '/step-2', next: '/step-4' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
            <VStack alignItems="stretch" spacing="16px">
                <SliderQuestion control={control} name={question31.name} prompt={question31.prompt} />
                <SliderQuestion control={control} name={question32.name} prompt={question32.prompt} />
                <SliderQuestion control={control} name={question33.name} prompt={question33.prompt} />
                <SliderQuestion control={control} name={question34.name} prompt={question34.prompt} />
            </VStack>
        </WizardStep>
    );
};

export default Step3;
