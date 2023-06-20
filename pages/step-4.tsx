import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step4Questions = {
    question4: string;
};

const Step4 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question4);
    const setQuestion = useWizardStore((state) => state.setQuestion4);

    const { control, handleSubmit } = useForm<Step4Questions>();

    return (
        <WizardStep
            prompt={question.props.prompt}
            step={4}
            secondaryBtnOnClick={() => router.push('/step-3')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question4);
                router.push('/step-5');
            })}
        >
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
