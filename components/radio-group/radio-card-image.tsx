import NextImage from 'next/image';
import { Box, Flex, useRadio, chakra } from '@chakra-ui/react';

export type RadioCardImageProps = {
    label: string;
    value: string;
    src: (isChecked: boolean) => any;
};

export const RadioCardImage = (props: RadioCardImageProps) => {
    const { state, getInputProps, getRootProps, getRadioProps, getLabelProps } = useRadio(props);

    return (
        <Flex
            as="label"
            flexDirection="column"
            alignItems="center"
            cursor="pointer"
            {...getRootProps()}
            {...getLabelProps()}
        >
            <input {...getInputProps()} />
            <Box {...getRadioProps()} w="full" maxW="200px" position="relative">
                <NextImage src={props.src(state.isChecked)} alt={props.label} layout="responsive" />
            </Box>
            <chakra.span
                mt="8px"
                textAlign="center"
                color={state.isChecked ? 'indigo.600' : 'slate.500'}
            >
                {props.label}
            </chakra.span>
        </Flex>
    );
};
