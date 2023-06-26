import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

const Step1 = () => {
    const { name, prompt, subtitle, options, defaultValues, setValue } = useWizardStore(({ question1 }) => ({
        ...question1,
        defaultValues: { [question1.name]: question1.value },
    }));

    const { control, handleSubmit } = useForm<typeof defaultValues>({ defaultValues });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 1, previous: '/', next: '/step-2' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} name={name} options={options} />
        </WizardStep>
    );
};

export default Step1;
