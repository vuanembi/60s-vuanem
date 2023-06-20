import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioGroupQuestionProps } from '../components/radio-question/radio-group';

import { useWizardStore } from '../stores/wizard.store';
import { WizardStep } from '../components/wizard/step';

type Step6Questions = {
    question6: string;
};

const Step6 = () => {
    const router = useRouter();

    const question = useWizardStore((state) => state.question6);
    const setQuestion = useWizardStore((state) => state.setQuestion6);

    const { control, handleSubmit } = useForm<Step6Questions>();

    return (
        <WizardStep
            prompt={question.props.prompt}
            step={6}
            secondaryBtnOnClick={() => router.push('/step-5')}
            onSubmit={handleSubmit((value) => {
                setQuestion(value.question6);
                router.push('/step-7');
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

export default Step6;
