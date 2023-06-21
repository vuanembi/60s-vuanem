export type RadioQuestion<O> = {
    props: {
        name: string;
        prompt: string;
        options: O[];
    };
    value: string;
};

export type SetRadioQuestion = (value: string) => void;

export type SliderQuestion = {
    props: {
        name: string;
        prompt: string;
    };
    value: number;
};

export type SetSliderQuestion = (value: number) => void;
