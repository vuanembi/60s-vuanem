import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step4Questions = {
    question4: string;
};

const Step4 = () => {
    const question = useWizardStore((state) => state.question4);
    const setQuestion = useWizardStore((state) => state.setQuestion4);

    const { control, handleSubmit } = useForm<Step4Questions>();

    const getWizardStepProps = useWizardStep({
        step: 4,
        previous: '/step-3',
        next: '/step-5',
        callback: (value) => {
            setQuestion(value.question4);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt={question.props.prompt} {...getWizardStepProps()}>
            <RadioGroupQuestionProps
                control={control}
                columns={{ base: 2, md: 3 }}
                Item={RadioCardImage}
                {...question.props}
            />
        </WizardStep>
    );
};

export default Step4;
