import { Flex, Progress, Text, chakra } from '@chakra-ui/react';
import { useWizard } from 'react-use-wizard';

import { Header } from '../header';

export const WizardHeader = () => {
    const { activeStep, stepCount } = useWizard();

    return (
        <Header>
            <Flex mt="24px" justifyContent="flex-end">
                <Text color="#2D2E7F">
                    {activeStep}
                    <chakra.span color="#ABABAB">
                        {' / '}
                        {stepCount}
                    </chakra.span>
                </Text>
            </Flex>
            <Progress
                mt="8px"
                // colorScheme="yellow"
                bgColor="#E7E7E7"
                borderRadius="80px"
                sx={{
                    '& > div': { 'background-color': '#F6A733' },
                }}
                max={stepCount}
                value={activeStep}
            />
        </Header>
    );
};
