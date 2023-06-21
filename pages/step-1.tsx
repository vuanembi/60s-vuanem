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
    const question = useWizardStore((state) => state.question1);
    const setQuestion = useWizardStore((state) => state.setQuestion1);

    const { control, handleSubmit } = useForm<Step1Questions>({
        defaultValues: { question1: question.value },
    });

    const getWizardStepProps = useWizardStep({
        step: 1,
        previous: '/',
        next: '/step-2',
        callback: (value) => {
            setQuestion(value.question1);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt={question.props.prompt} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} {...question.props} />
        </WizardStep>
    );
};

export default Step1;
