import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Image,
    LinkBox,
    LinkOverlay,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    SimpleGrid,
    SlideFade,
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
import { GetProductsFormValues, Product, useGetProducts } from '../../hooks/use-wizard-form';
import { useAnimationOnMount } from '../../hooks/use-animation-on-mount';
import { RadioCardTextProps } from '../radio-question/radio-card-text';

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
                        <VStack p="16px" spacing="8px" alignItems="stretch" divider={<Divider variant="dashed" />}>
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

const WizardResult = ({ products }: { products: Product[] }) => {
    const { isOpen } = useAnimationOnMount();

    return (
        <SimpleGrid mt="24px" columns={{ base: 2, md: 3 }} spacing="20px">
            {products.map((item) => {
                return (
                    <LinkBox
                        as={Flex}
                        key={item.slug}
                        flexDirection="column"
                        alignItems="stretch"
                        borderRadius="6px"
                        borderWidth="1px"
                        borderColor="indigo.600"
                    >
                        <SlideFade in={isOpen}>
                            <Image src={item.imageSrc} alt={item.name} />
                            <LinkOverlay isExternal href={item.slug}>
                                <Text p="6px">{item.name}</Text>
                            </LinkOverlay>
                        </SlideFade>
                    </LinkBox>
                );
            })}
        </SimpleGrid>
    );
};

export const WizardResults = ({ answers, results }: WizardResultProps) => {
    const { data = { mattress: [], accessory: [] } } = results;

    return (
        <Flex flexDirection="column" alignItems="stretch">
            <Box>
                <Flex justifyContent="space-between">
                    <Text fontWeight="bold">Kết quả phù hợp</Text>
                    <WizardAnswer values={answers} />
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
