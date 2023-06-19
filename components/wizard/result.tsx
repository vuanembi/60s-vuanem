import {
    Button,
    Divider,
    Flex,
    Icon,
    Image,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

import {
    UseRadioQuestion,
    useQuestion1,
    useQuestion2,
    useQuestion3s,
    useQuestion4,
    useQuestion5,
    useQuestion6,
    useQuestion7,
} from '../../hooks/use-questions';
import { RadioCardTextProps } from '../radio-question/radio-card-text';
import { GetProductsFormValues, useGetProducts } from '../../hooks/use-wizard-form';

type WizardAnswerProps = {
    values: GetProductsFormValues;
};

const WizardAnswer = ({ values }: WizardAnswerProps) => {
    type Question = ReturnType<UseRadioQuestion<RadioCardTextProps>>;

    const questions = [
        useQuestion1(),
        useQuestion2(),
        ...useQuestion3s().questions,
        useQuestion4(),
        useQuestion5(),
        useQuestion6(),
        useQuestion7(),
    ] as ReturnType<UseRadioQuestion<RadioCardTextProps>>[];

    const answers = Object.entries(values).map(([id, answer], i) => {
        const question = questions.find(({ name }) => name === id) as Question;
        const answer_ = question.options
            ? (question.options.find((x) => x.value === answer) as RadioCardTextProps).label
            : answer;
        return { question: question.question, answer: answer_ };
    });

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
                        <VStack
                            p="16px"
                            spacing="8px"
                            alignItems="stretch"
                            divider={<Divider variant="dashed" />}
                        >
                            {answers.map(({ question, answer }) => (
                                <Flex key={question} flexDirection="column" alignItems="stretch">
                                    <Text color="slate.500">{question}</Text>
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

type WizardResultProps = {
    answers: GetProductsFormValues;
    results: ReturnType<typeof useGetProducts>;
};

export const WizardResult = ({ answers, results }: WizardResultProps) => {
    const { data = [] } = results;

    return (
        <Flex flexDirection="column" alignItems="stretch">
            <Flex justifyContent="space-between">
                <Text fontWeight="bold">Kết quả phù hợp</Text>
                <WizardAnswer values={answers} />
            </Flex>
            {data && (
                <SimpleGrid mt="24px" columns={{ base: 2, md: 3 }} spacing="20px">
                    {data.map((item) => (
                        <Flex
                            key={item.slug}
                            flexDirection="column"
                            alignItems="stretch"
                            borderRadius="6px"
                            borderWidth="1px"
                            borderColor="indigo.600"
                        >
                            <Image src={item.imageSrc} alt={item.name} />
                            <Text p="6px">{item.name}</Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            )}
        </Flex>
    );
};
