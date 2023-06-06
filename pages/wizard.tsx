import { useForm } from 'react-hook-form';
import { Wizard as ReactWizard } from 'react-use-wizard';

import {
    useQuestion1,
    useQuestion2,
    useQuestion3,
    useQuestion4,
    useQuestion5,
    useQuestion6,
} from '../hooks/use-questions';
import { GetProductsFormValues } from '../hooks/use-wizard-form';
import { WizardStep } from '../components/wizard/step';
import { RadioCardText } from '../components/radio-group/radio-card-text';
import { RadioCardImage } from '../components/radio-group/radio-card-image';
import { WizardProgress } from '../components/wizard/progress';
import { WizardResult } from '../components/wizard/result';

const Wizard = () => {
    const { control, handleSubmit, watch } = useForm<GetProductsFormValues>();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                    columns={2}
                    Item={RadioCardImage}
                />
                <WizardStep
                    {...useQuestion5()}
                    control={control}
                    columns={2}
                    Item={RadioCardImage}
                />
                <WizardStep
                    {...useQuestion6()}
                    control={control}
                    columns={2}
                    Item={RadioCardImage}
                />
                <WizardResult values={watch()} />
            </ReactWizard>
        </form>
    );
};

export default Wizard;
