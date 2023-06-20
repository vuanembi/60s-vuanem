import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step2Questions = {
    question2: string;
};

const Step2 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question2);
    const setQuestion = useWizardStore((state) => state.setQuestion2);

    const { control, handleSubmit } = useForm<Step2Questions>();

    return (
        <WizardStep
            prompt={question.props.prompt}
            step={2}
            secondaryBtnOnClick={() => router.push('/step-1')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question2);
                router.push('/step-3');
            })}
        >
            <RadioGroupQuestionProps
                control={control}
                columns={1}
                Item={RadioCardImage}
                {...question.props}
            />
        </WizardStep>
    );
};

export default Step2;
