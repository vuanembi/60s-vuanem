import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step7Questions = {
    question7: string;
};

const Step7 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question7);
    const setQuestion = useWizardStore((state) => state.setQuestion7);

    const { control, handleSubmit } = useForm<Step7Questions>();

    return (
        <WizardStep
            step={7}
            prompt={question.props.prompt}
            secondaryBtnOnClick={() => router.push('/step-6')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question7);
                router.push('/results');
            })}
        >
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
