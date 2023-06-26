import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

const Step2 = () => {
    const { name, prompt, subtitle, options, defaultValues, setValue } = useWizardStore(({ question2 }) => ({
        ...question2,
        defaultValues: { [question2.name]: question2.value },
    }));

    const { control, handleSubmit } = useForm<typeof defaultValues>({ defaultValues });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 2, previous: '/step-1', next: '/step-3' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
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
