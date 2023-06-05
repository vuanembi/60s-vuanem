import {
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
    UseQuestion,
    useQuestion1,
    useQuestion2,
    useQuestion3,
    useQuestion4,
    useQuestion5,
    useQuestion6,
} from '../../hooks/use-questions';
import { RadioCardTextProps } from '../radio-group/radio-card-text';
import { GetProductsFormValues, useGetProducts } from '../../hooks/use-wizard-form';

type WizardAnswerProps = {
    values: GetProductsFormValues;
};

const WizardAnswer = ({ values }: WizardAnswerProps) => {
    type Question = ReturnType<UseQuestion<RadioCardTextProps>>;

    const questions = [
        useQuestion1(),
        useQuestion2(),
        useQuestion3(),
        useQuestion4(),
        useQuestion5(),
        useQuestion6(),
    ] as ReturnType<UseQuestion<RadioCardTextProps>>[];

    const answers = Object.entries(values).map(([id, answer], i) => {
        const question = questions.find(({ name }) => name === id) as Question;
        const { label } = question.options.find((x) => x.value === answer) as RadioCardTextProps;
        return { question: question.question, answer: label };
    });

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <Flex tabIndex={0} role="button" alignItems="center" textColor="slate.500">
                    Xem lại lựa chọn
                    <Icon as={HiOutlineChevronDown} ml="4px" />
                </Flex>
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
                                    <Text textColor="indigo.600" fontWeight="bold">
                                        {answer}
                                    </Text>
                                </Flex>
                            ))}
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export const WizardResult = ({ values }: { values: GetProductsFormValues }) => {
    const { data, isLoading } = useGetProducts({
        cat: values.question6,
        size: values.question4,
    });

    return (
        <Flex flexDirection="column" alignItems="stretch">
            <Flex justifyContent="space-between">
                <Text textColor="indigo.600" fontWeight="bold">
                    Kết quả phù hợp
                </Text>
                <WizardAnswer values={values} />
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
                            <Text p="6px" textColor="indigo.600">
                                {item.name}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            )}
        </Flex>
    );
};
