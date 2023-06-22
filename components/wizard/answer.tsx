import {
    Button,
    Divider,
    Flex,
    Icon,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Text,
    VStack,
} from '@chakra-ui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

import { useWizardStore } from '../../stores/wizard.store';

export const WizardAnswer = () => {
    const answers = useWizardStore((state) => [
        { prompt: state.question1.prompt(), answer: state.question1.value },
        { prompt: state.question2.prompt(), answer: state.question2.value },
        { prompt: state.question3.question31.prompt, answer: state.question3.question31.value },
        { prompt: state.question3.question32.prompt, answer: state.question3.question32.value },
        { prompt: state.question3.question33.prompt, answer: state.question3.question33.value },
        { prompt: state.question3.question34.prompt, answer: state.question3.question34.value },
        { prompt: state.question4.prompt(), answer: state.question4.value },
        { prompt: state.question5.prompt(), answer: state.question5.value },
        { prompt: state.question6.prompt(), answer: state.question6.value },
        { prompt: state.question7.prompt(), answer: state.question7.value },
    ]);

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <Button variant="link" rightIcon={<Icon as={HiOutlineChevronDown} />}>
                    Xem lại lựa chọn
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent w="100%" borderColor="indigo.600" boxShadow="base">
                    <PopoverBody>
                        <VStack p="16px" spacing="8px" alignItems="stretch" divider={<Divider variant="dashed" />}>
                            {answers.map(({ prompt, answer }) => (
                                <Flex key={prompt} flexDirection="column" alignItems="stretch">
                                    <Text color="slate.500">{prompt}</Text>
                                    <Text fontWeight="bold">{answer}</Text>
                                </Flex>
                            ))}
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};
