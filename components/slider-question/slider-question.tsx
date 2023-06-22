import { useController, Control } from 'react-hook-form';
import {
    Box,
    Divider,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Text,
    Flex,
} from '@chakra-ui/react';

export type SliderQuestionProps = {
    control: Control<any>;
    name: string;
    prompt: string;
};

export const SliderQuestion = ({ control, name, prompt }: SliderQuestionProps) => {
    const { field } = useController({ control, name });

    return (
        <Box>
            <Text mb="8px">{prompt}</Text>
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
                <SliderMark value={1}>
                    <Divider orientation="vertical" height="10px" borderColor="indigo.200" borderWidth="2px" />
                </SliderMark>
                <SliderMark value={2}>
                    <Divider orientation="vertical" height="10px" borderColor="indigo.200" borderWidth="2px" />
                </SliderMark>
                <SliderTrack bgColor="indigo.200">
                    <SliderFilledTrack bgColor="indigo.600" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Flex mt="8px" justifyContent="space-between">
                <Text>Không bị</Text>
                <Text>Thường xuyên</Text>
            </Flex>
        </Box>
    );
};
