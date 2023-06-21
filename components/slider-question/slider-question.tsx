import { useController, Control } from 'react-hook-form';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text } from '@chakra-ui/react';

export type SliderQuestionProps = {
    control: Control<any>;
    name: string;
    prompt: string;
};

export const SliderQuestion = ({ control, name, prompt: question }: SliderQuestionProps) => {
    const { field } = useController({ control, name });

    const labelStyles = { mt: '16px', fontSize: '14px' };

    return (
        <Box>
            <Text mb="14px">{question}</Text>
            <Slider
                defaultValue={field.value}
                min={0}
                max={3}
                step={1}
                onChangeEnd={(value) => {
                    field.onBlur();
                    field.onChange(value);
                }}
            >
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
