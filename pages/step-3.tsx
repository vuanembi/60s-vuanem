import { useForm } from 'react-hook-form';
import { VStack } from '@chakra-ui/react';

import { SliderQuestion } from '../components/slider-question/slider-question';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

const Step3 = () => {
    const { prompt, subtitle, question31, question32, question33, question34, defaultValues, setValue } =
        useWizardStore(({ question3 }) => ({
            ...question3,
            defaultValues: {
                question31: question3.question31.value,
                question32: question3.question32.value,
                question33: question3.question33.value,
                question34: question3.question34.value,
            },
        }));

    const { control, handleSubmit } = useForm<typeof defaultValues>({ defaultValues });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 3, previous: '/step-2', next: '/step-4' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
            <VStack alignItems="stretch" spacing="16px">
                <SliderQuestion control={control} {...question31} />
                <SliderQuestion control={control} {...question32} />
                <SliderQuestion control={control} {...question33} />
                <SliderQuestion control={control} {...question34} />
            </VStack>
        </WizardStep>
    );
};

export default Step3;
