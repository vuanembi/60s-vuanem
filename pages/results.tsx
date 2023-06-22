import { Box, Flex, Text } from '@chakra-ui/react';

import { useGetProducts } from '../hooks/use-wizard-form';
import { WizardAnswer } from '../components/wizard/answer';
import { WizardResult } from '../components/wizard/result';
import { useWizardStore } from '../stores/wizard.store';

const Results = () => {
    const wizardQuery = useWizardStore((state) => ({
        question6: state.question6.value,
        question7: state.question7.value,
    }));

    const { data = { mattress: [], accessory: [] } } = useGetProducts(
        { cau_6: wizardQuery.question6, cau_7: wizardQuery.question7 },
        true,
    );

    return (
        <Flex flexDirection="column" alignItems="stretch">
            <Box>
                <Flex justifyContent="space-between">
                    <Text fontWeight="bold">Chuyên gia giấc ngủ khuyên bạn nên dùng</Text>
                    <WizardAnswer />
                </Flex>
                <WizardResult products={data.mattress} />
            </Box>
            {data.accessory.length > 0 && (
                <Box mt="24px">
                    <Text fontWeight="bold">Combo giúp bạn ngủ ngon, chuyên gia khuyên dùng</Text>
                    <WizardResult products={data.accessory} />
                </Box>
            )}
        </Flex>
    );
};

export default Results;
