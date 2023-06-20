import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step1Questions = {
    question1: string;
};

const Step1 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question1);
    const setQuestion = useWizardStore((state) => state.setQuestion1);

    const { control, handleSubmit } = useForm<Step1Questions>();

    return (
        <WizardStep
            prompt={question.props.prompt}
            step={1}
            secondaryBtnOnClick={() => router.push('/')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question1);
                router.push('/step-2');
            })}
        >
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} {...question.props} />
        </WizardStep>
    );
};

export default Step1;
