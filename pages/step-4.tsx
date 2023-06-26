import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

const Step4 = () => {
    const { name, prompt, subtitle, options, defaultValues, setValue } = useWizardStore(({ question4 }) => ({
        ...question4,
        defaultValues: { [question4.name]: question4.value },
    }));

    const { control, handleSubmit } = useForm<typeof defaultValues>({ defaultValues });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 4, previous: '/step-3', next: '/step-5' });

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

export default Step4;
