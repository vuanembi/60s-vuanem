import { FC } from 'react';
import { Box, Button, Flex, Heading, HStack, SimpleGrid, useRadioGroup } from '@chakra-ui/react';
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
        <Flex flexDirection="column" alignItems="stretch">
            <Heading
                as="h2"
                mb="16px"
                minH="54px"
                color="#2D2E7F"
                textAlign="center"
                fontSize="18px"
                fontWeight="bold"
                lineHeight="27px"
            >
                {question}
            </Heading>
            <Box height="450px">
                <SimpleGrid {...getRootProps()} columns={columns} spacing="20px">
                    {options.map((option, i) => (
                        <Item key={i} {...option} {...getRadioProps({ value: option.value })} />
                    ))}
                </SimpleGrid>
            </Box>
            <HStack mt="20px">
                <Button onClick={() => previousStep()}>Quay lại</Button>
                <Button
                    type={activeStep === stepCount - 1 ? 'submit' : 'button'}
                    isDisabled={!control.getFieldState(field.name).isTouched}
                    onClick={() => nextStep()}
                >
                    Tiếp tục
                </Button>
            </HStack>
        </Flex>
    );
};
