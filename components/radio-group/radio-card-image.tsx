import NextImage from 'next/image';
import { Box, useRadio } from '@chakra-ui/react';

type RadioCardImageProps = {
    label: string;
    value: string;
    SVG: any;
    checkedSVG: any;
};

export const RadioCardImage = (props: RadioCardImageProps) => {
    const { state, getInputProps, getRadioProps } = useRadio(props);

    return (
        <Box as="label">
            <input {...getInputProps()} />
            <Box {...getRadioProps()} display="relative" cursor="pointer">
                <NextImage src={state.isChecked ? props.checkedSVG : props.SVG} alt={props.label} />
            </Box>
        </Box>
    );
};
