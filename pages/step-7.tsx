import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step7Questions = {
    question7: string;
};

const Step7 = () => {
    const { name, prompt, options, value, setValue } = useWizardStore((state) => state.question7);

    const { control, handleSubmit } = useForm<Step7Questions>({
        defaultValues: { question7: value },
    });

    const getWizardStepProps = useWizardStep({
        setValue,
        handleSubmit,
        step: 7,
        previous: '/step-6',
        next: '/results',
    });

    return (
        <WizardStep prompt={prompt()} {...getWizardStepProps()}>
            <RadioGroupQuestionProps
                control={control}
                columns={{ base: 2, md: 4 }}
                Item={RadioCardImage}
                name={name}
                options={options}
            />
        </WizardStep>
    );
};

export default Step7;
