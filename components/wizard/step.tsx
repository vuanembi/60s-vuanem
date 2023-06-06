import { FC } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    Flex,
    Heading,
    ResponsiveValue,
    SimpleGrid,
    useRadioGroup,
} from '@chakra-ui/react';
import { useController, Control } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

import { RadioCardImageProps } from '../radio-group/radio-card-image';
import { RadioCardTextProps } from '../radio-group/radio-card-text';
import { GetProductsFormValues } from '../../hooks/use-wizard-form';

type RadioItemProps = RadioCardImageProps | RadioCardTextProps;

type WizardStepProps<T extends RadioItemProps> = {
    name: keyof GetProductsFormValues;
    question: string;
    options: T[];
    control: Control<GetProductsFormValues>;
    columns: ResponsiveValue<number>;
    Item: FC<T>;
};

export const WizardStep = <T extends RadioItemProps>(props: WizardStepProps<T>) => {
    const router = useRouter();

    const { name, question, options, columns, control, Item } = props;

    const { field, fieldState } = useController({ control, name });

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        onChange: (value) => {
            field.onChange(value);
            field.onBlur();
        },
        value: field.value,
    });

    const { previousStep, nextStep, activeStep, stepCount, isFirstStep } = useWizard();

    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="stretch">
            <Heading as="h2" mb="24px" textAlign="center" fontSize="20px">
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
                    variant="outline"
                    onClick={() => (isFirstStep ? router.push('/') : previousStep())}
                >
                    Quay lại
                </Button>
                <Button
                    type={activeStep === stepCount - 2 ? 'submit' : 'button'}
                    isDisabled={!fieldState.isTouched}
                    onClick={nextStep}
                >
                    Tiếp tục
                </Button>
            </Flex>
        </Flex>
    );
};
