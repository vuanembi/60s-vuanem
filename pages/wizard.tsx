import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Wizard as ReactWizard } from 'react-use-wizard';
import Joi from 'joi';

import {
    useQuestion1,
    useQuestion2,
    useQuestion3,
    useQuestion4,
    useQuestion5,
    useQuestion6,
} from '../hooks/use-questions';
import { GetProductsFormValues, useGetProducts } from '../hooks/use-wizard-form';
import { WizardStep } from '../components/wizard/step';
import { RadioCardText } from '../components/radio-group/radio-card-text';
import { RadioCardImage } from '../components/radio-group/radio-card-image';
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
                <WizardStep
                    {...useQuestion1()}
                    control={control}
                    columns={1}
                    Item={RadioCardText}
                />
                <WizardStep
                    {...useQuestion2()}
                    control={control}
                    columns={1}
                    Item={RadioCardImage}
                />
                <WizardStep
                    {...useQuestion3()}
                    control={control}
                    columns={1}
                    Item={RadioCardText}
                />
                <WizardStep
                    {...useQuestion4()}
                    control={control}
                    columns={{ base: 2, md: 3 }}
                    Item={RadioCardImage}
                />
                <WizardStep
                    {...useQuestion5()}
                    control={control}
                    columns={{ base: 2, md: 4 }}
                    Item={RadioCardImage}
                />
                <WizardStep
                    {...useQuestion6()}
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
