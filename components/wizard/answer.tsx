import {
    Box,
    Divider,
    Flex,
    Icon,
    IconButton,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Text,
    VStack,
} from '@chakra-ui/react';
import { HiInformationCircle } from 'react-icons/hi';

import { useWizardStore } from '../../stores/wizard.store';

export const WizardAnswer = () => {
    const answers = useWizardStore((state) => [
        { shortPrompt: state.question1.shortPrompt, answer: state.question1.value },
        { shortPrompt: state.question2.shortPrompt, answer: state.question2.value },
        { shortPrompt: state.question3.question31.shortPrompt, answer: state.question3.question31.value },
        { shortPrompt: state.question3.question32.shortPrompt, answer: state.question3.question32.value },
        { shortPrompt: state.question3.question33.shortPrompt, answer: state.question3.question33.value },
        { shortPrompt: state.question3.question34.shortPrompt, answer: state.question3.question34.value },
        { shortPrompt: state.question4.shortPrompt, answer: state.question4.value },
        { shortPrompt: state.question5.shortPrompt, answer: state.question5.value },
        { shortPrompt: state.question6.shortPrompt, answer: state.question6.value },
        { shortPrompt: state.question7.shortPrompt, answer: state.question7.value },
    ]);

    return (
        <Box flex="0">
            <Popover placement="bottom-end">
                <PopoverTrigger>
                    <IconButton
                        boxSize="48px"
                        variant="outline"
                        icon={<Icon as={HiInformationCircle} fontSize="20px" />}
                        aria-label=""
                    ></IconButton>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent w="full" borderColor="indigo.600" boxShadow="base">
                        <PopoverBody>
                            <VStack p="16px" spacing="8px" alignItems="stretch" divider={<Divider variant="dashed" />}>
                                {answers.map(({ shortPrompt, answer }) => (
                                    <Flex key={shortPrompt} flexDirection="column" alignItems="stretch">
                                        <Text color="slate.500">{shortPrompt}</Text>
                                        <Text fontWeight="bold">{answer}</Text>
                                    </Flex>
                                ))}
                            </VStack>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Box>
    );
};
