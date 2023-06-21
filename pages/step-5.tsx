import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';
import { WizardStep } from '../components/wizard/step';
import { useWizardStep } from '../hooks/use-wizard-step';
import { useWizardStore } from '../stores/wizard.store';

type Step5Questions = {
    question5: string;
};

const Step5 = () => {
    const question = useWizardStore((state) => state.question5);
    const setQuestion = useWizardStore((state) => state.setQuestion5);

    const { control, handleSubmit } = useForm<Step5Questions>({
        defaultValues: { question5: question.value },
    });

    const getWizardStepProps = useWizardStep({
        step: 5,
        previous: '/step-4',
        next: '/step-6',
        callback: (value) => {
            setQuestion(value.question5);
        },
        handleSubmit,
    });

    return (
        <WizardStep prompt={question.props.prompt} {...getWizardStepProps()}>
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} {...question.props} />
        </WizardStep>
    );
};

export default Step5;
