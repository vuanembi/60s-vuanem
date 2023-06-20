import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step5Questions = {
    question5: string;
};

const Step5 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question5);
    const setQuestion = useWizardStore((state) => state.setQuestion5);

    const { control, handleSubmit } = useForm<Step5Questions>();

    return (
        <WizardStep
            prompt={question.props.prompt}
            step={5}
            secondaryBtnOnClick={() => router.push('/step-4')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question5);
                router.push('/step-6');
            })}
        >
            <RadioGroupQuestionProps control={control} columns={1} Item={RadioCardText} {...question.props} />
        </WizardStep>
    );
};

export default Step5;
