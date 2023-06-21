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
    const question = useWizardStore((state) => state.question6);
    const setQuestion = useWizardStore((state) => state.setQuestion6);

    const { control, handleSubmit } = useForm<Step6Questions>();

    const getWizardStepProps = useWizardStep({
        step: 6,
        previous: '/step-5',
        next: '/step-7',
        callback: (value) => {
            setQuestion(value.question6);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt={question.props.prompt} {...getWizardStepProps()}>
            <RadioGroupQuestionProps
                control={control}
                columns={{ base: 2, md: 4 }}
                Item={RadioCardImage}
                {...question.props}
            />
        </WizardStep>
    );
};

export default Step6;
