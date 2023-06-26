import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

const Step5 = () => {
    const { name, prompt, subtitle, options, defaultValues, setValue } = useWizardStore(({ question5 }) => ({
        ...question5,
        defaultValues: { [question5.name]: question5.value },
    }));

    const { control, handleSubmit } = useForm<typeof defaultValues>({ defaultValues });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 5, previous: '/step-4', next: '/step-6' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
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

export default Step5;
