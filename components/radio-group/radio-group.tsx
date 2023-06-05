import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, SimpleGrid, useRadioGroup } from '@chakra-ui/react';
import { useController, Control } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

import { GetProductsFormValues } from '../../hooks/use-wizard-form';

export type RadioItemProps = {
    label: string;
    value: string;
    [key: string]: any;
};

type RadioGroupProps<T extends RadioItemProps> = {
    name: keyof GetProductsFormValues;
    question: string;
    options: T[];
    control: Control<GetProductsFormValues>;
    columns: number;
    Item: FC<T>;
};

export const RadioGroup = <T extends RadioItemProps>(props: RadioGroupProps<T>) => {
    const router = useRouter();

    const { name, question, options, columns, control, Item } = props;

    const { field } = useController({ control, name });

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        onChange: (value) => {
            field.onBlur();
            field.onChange(value);
        },
        value: field.value,
    });

    const { previousStep, nextStep, activeStep, stepCount } = useWizard();

    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="stretch">
            <Heading
                as="h2"
                mb="24px"
                color="indigo.600"
                textAlign="center"
                fontSize="20px"
                fontWeight="bold"
            >
                {question}
            </Heading>
            <Box>
                <SimpleGrid {...getRootProps()} columns={columns} spacing="20px">
                    {options.map((option, i) => (
                        <Item key={i} {...option} {...getRadioProps({ value: option.value })} />
                    ))}
                </SimpleGrid>
            </Box>
            <Flex w="full" position="absolute" bottom="0px" justifyContent="space-between">
                <Button
                    colorScheme="indigo"
                    variant="outline"
                    onClick={() => (activeStep === 0 ? router.push('/') : previousStep())}
                >
                    Quay lại
                </Button>
                <Button
                    colorScheme="indigo"
                    variant="solid"
                    type={activeStep === stepCount - 1 ? 'submit' : 'button'}
                    isDisabled={!control.getFieldState(field.name).isTouched}
                    onClick={() => nextStep()}
                >
                    Tiếp tục
                </Button>
            </Flex>
        </Flex>
    );
};
