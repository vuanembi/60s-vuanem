import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step1Questions = {
    question1: string;
};

const Step1 = () => {
    const { name, prompt, subtitle, options, value, setValue } = useWizardStore((state) => state.question1);

    const { control, handleSubmit } = useForm<Step1Questions>({
        defaultValues: { question1: value },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 1, previous: '/', next: '/step-2' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} name={name} options={options} />
        </WizardStep>
    );
};

export default Step1;
