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
    const question1 = useWizardStore((state) => state.question1);
    const question2 = useWizardStore((state) => state.question2);
    const question31 = useWizardStore((state) => state.question31);
    const question32 = useWizardStore((state) => state.question32);
    const question33 = useWizardStore((state) => state.question33);
    const question34 = useWizardStore((state) => state.question34);
    const question4 = useWizardStore((state) => state.question4);
    const question5 = useWizardStore((state) => state.question5);
    const question6 = useWizardStore((state) => state.question6);
    const question7 = useWizardStore((state) => state.question7);

    const answers = [
        question1,
        question2,
        question31,
        question32,
        question33,
        question34,
        question4,
        question5,
        question6,
        question7,
    ].map(({ props: props, value }) => ({ prompt: props.prompt, answer: value }));

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
