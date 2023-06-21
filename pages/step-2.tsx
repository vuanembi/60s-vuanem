import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step2Questions = {
    question2: string;
};

const Step2 = () => {
    const question = useWizardStore((state) => state.question2);
    const setQuestion = useWizardStore((state) => state.setQuestion2);

    const { control, handleSubmit } = useForm<Step2Questions>();

    const getWizardStepProps = useWizardStep({
        step: 2,
        previous: '/step-1',
        next: '/step-3',
        callback: (value) => {
            setQuestion(value.question2);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt={question.props.prompt} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardImage} {...question.props} />
        </WizardStep>
    );
};

export default Step2;
