export type RadioQuestion<N extends string, O> = {
    name: N;
    options: O[];
    prompt: () => string;
    value: string;
    setValue: (value: { [key in N]: string }) => void;
};

export type SliderQuestion = {
    name: string;
    prompt: string;
    value: number;
};
