import Image from 'next/image';
import { Box, Button, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Header } from '../components/header/header';
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

const ChonDem60s = () => {
    const { control, handleSubmit, reset } = useForm();

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <VStack>
                    <RadioGroup
                        {...useQuestion1()}
                        control={control}
                        columns={1}
                        Item={RadioCardText}
                    />
                    <RadioGroup
                        {...useQuestion2()}
                        control={control}
                        columns={2}
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
                        columns={4}
                        Item={RadioCardImage}
                    />
                    <RadioGroup
                        {...useQuestion6()}
                        control={control}
                        columns={5}
                        Item={RadioCardImage}
                    />
                </VStack>
                <Button type="submit">Submit</Button>
            </form>
        </>
    );
};

export default ChonDem60s;
