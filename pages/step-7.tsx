import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step7Questions = {
    question7: string;
};

const Step7 = () => {
    const question = useWizardStore((state) => state.question7);
    const setQuestion = useWizardStore((state) => state.setQuestion7);

    const { control, handleSubmit } = useForm<Step7Questions>({
        defaultValues: { question7: question.value },
    });

    const getWizardStepProps = useWizardStep({
        step: 7,
        previous: '/step-6',
        next: '/results',
        callback: (value) => {
            setQuestion(value.question7);
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

export default Step7;
