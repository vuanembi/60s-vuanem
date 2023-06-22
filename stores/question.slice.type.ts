export type RadioQuestion<N extends string, O> = {
    name: N;
    options: O[];
    prompt: () => string;
    subtitle?: string;
    value: string;
    setValue: (value: { [key in N]: string }) => void;
};

export type SliderQuestion = {
    name: string;
    prompt: string;
    subtitle?: string;
    value: number;
};
