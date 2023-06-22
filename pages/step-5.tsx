import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step5Questions = {
    question5: string;
};

const Step5 = () => {
    const { name, prompt, subtitle, options, value, setValue } = useWizardStore((state) => state.question5);

    const { control, handleSubmit } = useForm<Step5Questions>({
        defaultValues: { question5: value },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 5, previous: '/step-4', next: '/step-6' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} name={name} options={options} />
        </WizardStep>
    );
};

export default Step5;
