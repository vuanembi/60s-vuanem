import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Wizard as ReactWizard } from 'react-use-wizard';
import Joi from 'joi';

import {
    useQuestion1,
    useQuestion2,
    useQuestion3s,
    useQuestion4,
    useQuestion5,
    useQuestion6,
    useQuestion7,
} from '../hooks/use-questions';
import { GetProductsFormValues, useGetProducts } from '../hooks/use-wizard-form';
import { RadioCardText } from '../components/radio-question/radio-card-text';
import { RadioCardImage } from '../components/radio-question/radio-card-image';
import { RadioQuestionStep } from '../components/radio-question/radio-question-step';
import { SliderQuestionStep } from '../components/slider-question/slider-question-step';
import { WizardProgress } from '../components/wizard/progress';
import { WizardResult } from '../components/wizard/result';

const querySchema = Joi.object({
    question4: Joi.string().required(),
    question6: Joi.string().required(),
})
    .required()
    .options({ stripUnknown: true });

const Wizard = () => {
    const { control, watch, formState } = useForm<GetProductsFormValues>({
        mode: 'all',
        resolver: joiResolver(querySchema),
    });

    const useQueryResults = useGetProducts(
        { cat: watch().question6, size: watch().question4 },
        formState.isValid,
    );

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ReactWizard header={<WizardProgress />}>
                <RadioQuestionStep
                    {...useQuestion1()}
                    control={control}
                    columns={1}
                    Item={RadioCardText}
                />
                <RadioQuestionStep
                    {...useQuestion2()}
                    control={control}
                    columns={1}
                    Item={RadioCardImage}
                />
                <SliderQuestionStep control={control} {...useQuestion3s()} />
                <RadioQuestionStep
                    {...useQuestion4()}
                    control={control}
                    columns={{ base: 2, md: 3 }}
                    Item={RadioCardImage}
                />
                <RadioQuestionStep
                    {...useQuestion5()}
                    control={control}
                    columns={1}
                    Item={RadioCardText}
                />
                <RadioQuestionStep
                    {...useQuestion6()}
                    control={control}
                    columns={{ base: 2, md: 4 }}
                    Item={RadioCardImage}
                />
                <RadioQuestionStep
                    {...useQuestion7()}
                    control={control}
                    columns={{ base: 2, md: 4 }}
                    Item={RadioCardImage}
                />
                <WizardResult answers={watch()} results={useQueryResults} />
            </ReactWizard>
        </form>
    );
};

export default Wizard;
