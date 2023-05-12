import NextImage from 'next/image';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Text,
    VStack,
    Box,
} from '@chakra-ui/react';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';

import {
    UseQuestion,
    useQuestion1,
    useQuestion2,
    useQuestion3,
    useQuestion4,
    useQuestion5,
    useQuestion6,
} from '../../hooks/use-questions';
import { GetProductsFormValues, useGetProducts } from '../../hooks/use-wizard-form';

type WizardAnswerProps = {
    values: GetProductsFormValues;
};

const WizardAnswer = ({ values }: WizardAnswerProps) => {
    const questions = [
        useQuestion1(),
        useQuestion2(),
        useQuestion3(),
        useQuestion4(),
        useQuestion5(),
        useQuestion6(),
    ];

    return (
        <Accordion allowToggle fontSize="14px">
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <Heading as="h2" bgColor="#2D2E7F" color="white">
                            <AccordionButton p="14px">
                                <Flex as="span" flex="1" textAlign="left">
                                    Xem lại các lựa chọn của bạn (8)
                                </Flex>
                                {isExpanded ? (
                                    <Icon as={IoChevronUpCircle} fontSize="20px" />
                                ) : (
                                    <Icon as={IoChevronDownCircle} fontSize="20px" />
                                )}
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel p="0px">
                            <VStack p="24px" spacing="26px" alignItems="stretch" bgColor="#F4F5FF">
                                {Object.entries(values).map(([id, answer], i) => {
                                    const question = questions.find(
                                        ({ name }) => name === id,
                                    ) as ReturnType<UseQuestion>;

                                    const { label: answerLabel } = question.options.find(
                                        ({ value }) => value === answer,
                                    );

                                    return (
                                        <VStack key={id} spacing="14px" alignItems="stretch">
                                            <Text color="#2D2E7F" fontWeight={700}>
                                                {`${i + 1}. ${question.question}`}
                                            </Text>
                                            <Text p="10px" bgColor="white">
                                                {answerLabel}
                                            </Text>
                                        </VStack>
                                    );
                                })}
                            </VStack>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    );
};

export const WizardResult = ({ values }: { values: GetProductsFormValues }) => {
    const { data, isLoading } = useGetProducts({
        cat: values.question6,
        size: values.question4,
    });

    return (
        <VStack alignItems="stretch">
            <WizardAnswer values={values} />
            {data && (
                <VStack alignItems="stretch" color="#2D2E7F">
                    <Text>{`Kết quả phù hợp (${data.length})`}</Text>
                    <SimpleGrid columns={2} spacing="25px">
                        {data.map((item) => (
                            <VStack key={item.slug} alignItems="stretch">
                                <Image src={item.imageSrc} alt={item.name} />
                                <Text>{item.name}</Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </VStack>
            )}
        </VStack>
    );
};
