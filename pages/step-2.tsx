import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step2Questions = {
    question2: string;
};

const Step2 = () => {
    const { name, prompt, options, value, setValue } = useWizardStore((state) => state.question2);

    const { control, handleSubmit } = useForm<Step2Questions>({
        defaultValues: { question2: value },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 2, previous: '/step-1', next: '/step-3' });

    return (
        <WizardStep prompt={prompt()} {...getWizardStepProps()}>
            <RadioGroupQuestionProps
                control={control}
                columns={1}
                Item={RadioCardImage}
                name={name}
                options={options}
            />
        </WizardStep>
    );
};

export default Step2;
