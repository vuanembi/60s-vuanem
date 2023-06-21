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

const options = {
    step: 3,
    previous: '/step-2',
    next: '/step-4',
};

const Step3 = () => {
    const question31 = useWizardStore((state) => state.question31);
    const setQuestion31 = useWizardStore((state) => state.setQuestion31);

    const question32 = useWizardStore((state) => state.question32);
    const setQuestion32 = useWizardStore((state) => state.setQuestion32);

    const question33 = useWizardStore((state) => state.question33);
    const setQuestion33 = useWizardStore((state) => state.setQuestion33);

    const question34 = useWizardStore((state) => state.question34);
    const setQuestion34 = useWizardStore((state) => state.setQuestion34);

    const { control, handleSubmit } = useForm<Step3Questions>();

    const getWizardStepProps = useWizardStep({
        step: 3,
        previous: '/step-2',
        next: '/step-5',
        callback: (value) => {
            setQuestion31(value.question31);
            setQuestion32(value.question32);
            setQuestion33(value.question33);
            setQuestion34(value.question34);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt="Bệnh lý liên quan của bạn?" {...getWizardStepProps()}>
            <VStack alignItems="stretch" spacing="20px">
                <SliderQuestion control={control} {...question31.props} />
                <SliderQuestion control={control} {...question32.props} />
                <SliderQuestion control={control} {...question33.props} />
                <SliderQuestion control={control} {...question34.props} />
            </VStack>
        </WizardStep>
    );
};

export default Step3;
