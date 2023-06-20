import { useCallback, useEffect } from 'react';
import { useController, Control } from 'react-hook-form';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text } from '@chakra-ui/react';

import { GetProductsFormValues } from '../../hooks/use-wizard-form';

export type QuestionSliderProps = {
    control: Control<GetProductsFormValues>;
    name: keyof GetProductsFormValues;
    question: string;
};

export const QuestionSlider = ({ control, name, question }: QuestionSliderProps) => {
    const { field } = useController({ control, name });

    const onChange = useCallback(
        (value: number) => {
            field.onBlur();
            field.onChange(value.toString());
        },
        [field],
    );

    useEffect(() => {
        onChange(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const labelStyles = { mt: '16px', fontSize: '14px' };

    return (
        <Box>
            <Text mb="14px">{question}</Text>
            <Slider defaultValue={0} min={0} max={3} step={1} onChangeEnd={onChange}>
                <SliderMark value={0} {...labelStyles}>
                    0
                </SliderMark>
                <SliderMark value={1} {...labelStyles}>
                    1
                </SliderMark>
                <SliderMark value={2} {...labelStyles}>
                    2
                </SliderMark>
                <SliderMark value={3} {...labelStyles}>
                    3
                </SliderMark>
                <SliderTrack bgColor="indigo.200">
                    <SliderFilledTrack bgColor="indigo.600" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
        </Box>
    );
};
