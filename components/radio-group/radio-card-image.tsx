import NextImage from 'next/image';
import { Box, Flex, useRadio, chakra } from '@chakra-ui/react';

export type RadioCardImageProps = {
    label: string;
    value: string;
    SVG: any;
    checkedSVG: any;
};

export const RadioCardImage = (props: RadioCardImageProps) => {
    const { state, getInputProps, getRadioProps, getLabelProps } = useRadio(props);

    return (
        <Flex as="label" flexDirection="column" alignItems="center">
            <input {...getInputProps()} />
            <Box {...getRadioProps()} display="relative" cursor="pointer">
                <NextImage src={state.isChecked ? props.checkedSVG : props.SVG} alt={props.label} />
            </Box>
            <chakra.span {...getLabelProps()} mt="10px" textAlign="center">
                {props.label}
            </chakra.span>
        </Flex>
    );
};
