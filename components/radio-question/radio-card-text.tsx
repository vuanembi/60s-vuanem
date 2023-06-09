import { Box, useRadio } from '@chakra-ui/react';

export type RadioCardTextProps = {
    label: string;
    value: string;
};

export const RadioCardText = (props: RadioCardTextProps) => {
    const { getInputProps, getRadioProps, getLabelProps, getRootProps } = useRadio(props);

    return (
        <Box as="label" {...getRootProps()} {...getLabelProps()}>
            <input {...getInputProps()} />
            <Box
                {...getRadioProps()}
                cursor="pointer"
                px="16px"
                py="8px"
                borderWidth="1px"
                borderRadius="6px"
                textAlign="center"
                color="indigo.600"
                bgColor="white"
                borderColor="indigo.600"
                _checked={{
                    color: 'white',
                    bgColor: 'indigo.600',
                }}
            >
                <span>{props.label}</span>
            </Box>
        </Box>
    );
};
