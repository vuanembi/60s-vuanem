import { Flex, Progress, Text, chakra, useToken } from '@chakra-ui/react';
import { useWizard } from 'react-use-wizard';

export const WizardProgress = () => {
    const indigo600 = useToken('colors', 'indigo.600');

    const { activeStep, stepCount } = useWizard();

    return activeStep !== stepCount - 1 ? (
        <Flex mb="24px" flexDirection="column">
            <Flex justifyContent="flex-end">
                <Text>
                    {activeStep + 1}
                    <chakra.span color="slate.500">{` / ${stepCount - 1}`}</chakra.span>
                </Text>
            </Flex>
            <Progress
                mt="12px"
                bgColor="indigo.200"
                borderRadius="80px"
                sx={{
                    '& > div': { 'background-color': indigo600 },
                }}
                max={stepCount - 1}
                value={activeStep + 1}
            />
        </Flex>
    ) : null;
};
