import { Container } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Wizard } from 'react-use-wizard';

import {
    useQuestion1,
    useQuestion2,
    useQuestion3,
    useQuestion4,
    useQuestion5,
    useQuestion6,
} from '../hooks/use-questions';
import { RadioGroup } from '../components/radio-group/radio-group';
import { RadioCardText } from '../components/radio-group/radio-card-text';
import { RadioCardImage } from '../components/radio-group/radio-card-image';
import { WizardHeader } from '../components/wizard/header';
import { WizardResult } from '../components/wizard/result';
import { GetProductsFormValues } from '../hooks/use-wizard-form';

const ChonDem60s = () => {
    const { control, handleSubmit, reset, watch } = useForm<GetProductsFormValues>();

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <Wizard header={<WizardHeader />}>
                        <RadioGroup
                            {...useQuestion1()}
                            control={control}
                            columns={1}
                            Item={RadioCardText}
                        />
                        <RadioGroup
                            {...useQuestion2()}
                            control={control}
                            columns={1}
                            Item={RadioCardImage}
                        />
                        <RadioGroup
                            {...useQuestion3()}
                            control={control}
                            columns={1}
                            Item={RadioCardText}
                        />
                        <RadioGroup
                            {...useQuestion4()}
                            control={control}
                            columns={2}
                            Item={RadioCardImage}
                        />
                        <RadioGroup
                            {...useQuestion5()}
                            control={control}
                            columns={2}
                            Item={RadioCardImage}
                        />
                        <RadioGroup
                            {...useQuestion6()}
                            control={control}
                            columns={2}
                            Item={RadioCardImage}
                        />
                        <WizardResult values={watch()} />
                    </Wizard>
                </form>
            </Container>
        </>
    );
};

export default ChonDem60s;
