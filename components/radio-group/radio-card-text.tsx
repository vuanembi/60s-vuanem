import { Box, useRadio } from '@chakra-ui/react';

export type RadioCardTextProps = {
    label: string;
    value: string;
};

export const RadioCardText = (props: RadioCardTextProps) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    return (
        <Box as="label">
            <input {...getInputProps()} />
            <Box
                {...getRadioProps()}
                cursor="pointer"
                px="16px"
                py="13px"
                borderWidth="1px"
                borderRadius="5px"
                textAlign="center"
                color="#9A9A9A"
                bgColor="transparent"
                borderColor="#D1D1D1"
                fontWeight="normal"
                _checked={{
                    color: '#2D2E7F',
                    bgColor: '#E9E9FF',
                    borderColor: '#2D2E7F',
                    fontWeight: 'bold',
                }}
            >
                <span>{props.label}</span>
            </Box>
        </Box>
    );
};
