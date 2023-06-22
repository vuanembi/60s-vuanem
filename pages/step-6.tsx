import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step6Questions = {
    question6: string;
};

const Step6 = () => {
    const { name, prompt, subtitle, options, value, setValue } = useWizardStore((state) => state.question6);

    const { control, handleSubmit } = useForm<Step6Questions>({
        defaultValues: { question6: value },
    });

    const getWizardStepProps = useWizardStep({ setValue, handleSubmit, step: 6, previous: '/step-5', next: '/step-7' });

    return (
        <WizardStep prompt={prompt()} subtitle={subtitle} {...getWizardStepProps()}>
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

export default Step6;
