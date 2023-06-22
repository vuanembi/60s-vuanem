import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step4Questions = {
    question4: string;
};

const Step4 = () => {
    const { name, prompt, options, value, setValue } = useWizardStore((state) => state.question4);

    const { control, handleSubmit } = useForm<Step4Questions>({
        defaultValues: { question4: value },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 4, previous: '/step-3', next: '/step-5' });

    return (
        <WizardStep prompt={prompt()} {...getWizardStepProps()}>
            <RadioGroupQuestionProps
                control={control}
                columns={{ base: 2, md: 3 }}
                Item={RadioCardImage}
                name={name}
                options={options}
            />
        </WizardStep>
    );
};

export default Step4;
