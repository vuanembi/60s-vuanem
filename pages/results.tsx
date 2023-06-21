import { Box, Flex, Text } from '@chakra-ui/react';

import { useGetProducts } from '../hooks/use-wizard-form';
import { WizardAnswer } from '../components/wizard/answer';
import { WizardResult } from '../components/wizard/result';
import { useWizardStore } from '../stores/wizard.store';

const Results = () => {
    const wizardQuery = useWizardStore((state) => state.getValues)();

    const { data = { mattress: [], accessory: [] } } = useGetProducts(
        {
            cau_6: wizardQuery.question6.value,
            cau_7: wizardQuery.question7.value,
        },
        true,
    );

    return (
        <Flex flexDirection="column" alignItems="stretch">
            <Box>
                <Flex justifyContent="space-between">
                    <Text fontWeight="bold">Kết quả phù hợp</Text>
                    <WizardAnswer />
                </Flex>
                <WizardResult products={data.mattress} />
            </Box>
            {data.accessory.length > 0 && (
                <Box mt="24px">
                    <Text fontWeight="bold">Sản phẩm thích hợp đi kèm</Text>
                    <WizardResult products={data.accessory} />
                </Box>
            )}
        </Flex>
    );
};

export default Results;